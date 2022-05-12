/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { linkResolver } from '../../../prismicConfiguration';
import Blog from '../../Containers/Blog/Blog';
import PostContent from '../../Containers/Blog/PostContent';
import PostHeader from '../../Containers/Blog/PostHeader';
import { Layout } from '../../Containers/Layout/Layout';
import {
  mapBlog,
  mapFooterData,
  mapGlobalSettingsData,
  mapMenuData,
  mapPost,
  mapSeoData,
} from '../../utils/mapper';
import {
  getBolgPost,
  getBolgPosts,
  getGlobalSettings,
  getMenu,
} from '../../utils/queries';
import {
  BlogDataType,
  FooterDataType,
  GlobalSettingsDataType,
  LangDataType,
  MenuDataType,
  PostDataType,
  SeoDataType,
} from '../../utils/types';

interface IndexProps {
  postData: PostDataType;
  blogData: BlogDataType;
  menuData: MenuDataType;
  globalSettingsData: GlobalSettingsDataType;
  footerData: FooterDataType;
  seoData: SeoDataType;
  langData: LangDataType;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedBolgPosts = (await getBolgPosts()).data.allPosts.edges;

  return {
    paths: fetchedBolgPosts.map((post: any) => linkResolver(post.node._meta)),
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
  locales,
}) => {
  const fetchedMenu = (await getMenu(locale!)).data.menu;
  const fetchedSiteSettings = (await getGlobalSettings(locale!)).data
    .site_settings;

  const fetchedPostData = (await getBolgPost(params!.uid as string, locale!))
    .data.post;
  const fetchedBolgPosts = (await getBolgPosts(locale!, 3)).data.allPosts;
  const postData: PostDataType = mapPost(fetchedPostData);
  const blogData: BlogDataType = mapBlog(
    'post-section-blog-title',
    fetchedBolgPosts
  );

  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);
  const menuData: MenuDataType = mapMenuData(fetchedMenu);
  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(globalSettingsData, postData);
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      postData,
      blogData,
      menuData,
      globalSettingsData,
      footerData,
      seoData,
      langData: {
        currentLanguage: locale,
        languages: locales,
      },
    },
  };
};

const Index: FC<IndexProps> = ({
  postData,
  blogData,
  menuData,
  globalSettingsData,
  footerData,
  seoData,
  langData,
}) => {
  return (
    <Layout
      seoData={seoData}
      menuItems={menuData.menuItems}
      menuActions={menuData.menuActions}
      logo={globalSettingsData.logo}
      logoInvert={globalSettingsData.logoInvert}
      footerData={footerData}
      langData={langData}
      documentMeta={postData.documentMeta}
    >
      <PostHeader
        image={postData.postImage}
        title={postData.title}
        date={postData.documentMeta.firstPublicationDate!}
      />
      <PostContent content={postData.postContent!} />
      <Blog {...blogData} />
    </Layout>
  );
};

export default Index;
