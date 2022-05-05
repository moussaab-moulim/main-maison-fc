/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import BlogHeader from '../../Containers/Blog/BlogHeader';
import { Layout } from '../../Containers/Layout/Layout';
import {
  mapBlog,
  mapBlogPage,
  mapFooterData,
  mapGlobalSettingsData,
  mapMenuData,
  mapSeoData,
} from '../../utils/mapper';
import {
  getBolgPage,
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
  PageSettings,
  SeoDataType,
} from '../../utils/types';

interface IndexProps {
  pageData: PageSettings;
  blogData: BlogDataType;
  menuData: MenuDataType;
  globalSettingsData: GlobalSettingsDataType;
  footerData: FooterDataType;
  seoData: SeoDataType;
  langData: LangDataType;
}

export const getStaticProps: GetStaticProps = async ({ locale, locales }) => {
  const fetchedMenu = (await getMenu(locale!)).data.menu;
  const fetchedSiteSettings = (await getGlobalSettings(locale!)).data
    .site_settings;
  const fetchedBlogData = (await getBolgPage(locale!)).data.blog;
  const fetchedBolgPosts = (await getBolgPosts(locale!, 3)).data.allPosts;
  // mapping fetched data
  const menuData: MenuDataType = mapMenuData(fetchedMenu);
  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);
  const pageData: PageSettings = mapBlogPage(fetchedBlogData);
  console.log('blooog', pageData);
  const blogData: BlogDataType = mapBlog(
    'section-blog-title',
    fetchedBolgPosts
  );

  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(globalSettingsData, pageData);
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      pageData,
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
  pageData,
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
      documentMeta={pageData.documentMeta}
    >
      <BlogHeader {...pageData} {...blogData} />

      {/* <BlogPosts {...blogData} /> */}
    </Layout>
  );
};

export default Index;
