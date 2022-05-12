/* eslint-disable no-underscore-dangle */
import React, { FC, Fragment } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { linkResolver } from '../../prismicConfiguration';
import About from '../Containers/About/About';
import BlogHeader from '../Containers/Blog/BlogHeader';
import Contact from '../Containers/Contact/Contact';
import PageHeader from '../Containers/Header/PageHeader';
import { Layout } from '../Containers/Layout/Layout';
import Team from '../Containers/Team/Team';
import Visions from '../Containers/Visions/Visions';
import {
  mapAboutPage,
  mapBlog,
  mapBlogPage,
  mapFooterData,
  mapGlobalSettingsData,
  mapMenuData,
  mapPageSettings,
  mapSeoData,
} from '../utils/mapper';
import {
  getAboutPage,
  getBolgPage,
  getBolgPosts,
  getGlobalSettings,
  getMenu,
  getPages,
} from '../utils/queries';
import {
  AboutPageDataType,
  BlogDataType,
  FooterDataType,
  GlobalSettingsDataType,
  IMeta,
  LangDataType,
  MenuDataType,
  PageSettings,
  SeoDataType,
} from '../utils/types';

interface CurrentPageProps {
  pageSettings: PageSettings;
  pageData: AboutPageDataType | BlogDataType;
}

interface IndexProps {
  pageSettings: PageSettings;
  pageData: BlogDataType | AboutPageDataType;
  menuData: MenuDataType;
  globalSettingsData: GlobalSettingsDataType;
  footerData: FooterDataType;
  seoData: SeoDataType;
  langData: LangDataType;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedPages = (await getPages(['about', 'blog'])).data._allDocuments
    .edges;
  return {
    paths: fetchedPages.map((page: any) =>
      linkResolver(page.node._meta as IMeta)
    ),
    fallback: false,
  };
};
const getTypeFromUid = async (uid: string): Promise<string> => {
  const fetchedPages = (await getPages(['about', 'blog'])).data._allDocuments
    .edges;
  return fetchedPages.find((page: any) => page.node._meta.uid === uid).node
    ._meta.type;
};
const getCurrentPageData = async (
  locale: string,
  type: string,
  uid: string
): Promise<CurrentPageProps> => {
  if (type === 'blog') {
    const fetchedBlogData = (await getBolgPage(uid, locale!)).data.blog;
    const pageSettings: PageSettings = mapBlogPage(fetchedBlogData);
    const fetchedBolgPosts = (await getBolgPosts(locale!, 3)).data.allPosts;
    const blogData: BlogDataType = mapBlog(
      'section-blog-title',
      fetchedBolgPosts
    );
    return {
      pageSettings,
      pageData: blogData,
    };
  }
  const fetchedAboutData = (await getAboutPage(uid, locale!)).data.about;
  const pageSettings: PageSettings = mapPageSettings(fetchedAboutData);
  const pageData: AboutPageDataType = mapAboutPage(fetchedAboutData);
  return {
    pageSettings,
    pageData,
  };
};
export const getStaticProps: GetStaticProps<IndexProps> = async ({
  params,
  locale,
  locales,
}) => {
  const fetchedMenu = (await getMenu(locale!)).data.menu;
  const fetchedSiteSettings = (await getGlobalSettings(locale!)).data
    .site_settings;

  const currentPageType: string = await getTypeFromUid(params!.uid as string);
  const currentPageData: CurrentPageProps = await getCurrentPageData(
    locale!,
    currentPageType,
    params!.uid as string
  );

  // mapping fetched data
  const menuData: MenuDataType = mapMenuData(fetchedMenu);
  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);

  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(
    globalSettingsData,
    currentPageData.pageSettings
  );
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      pageSettings: currentPageData.pageSettings,
      pageData: currentPageData.pageData,
      menuData,
      globalSettingsData,
      footerData,
      seoData,
      langData: {
        currentLanguage: locale!,
        languages: locales!,
      },
    },
  };
};

const Index: FC<IndexProps> = ({
  pageSettings,
  pageData,
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
      documentMeta={pageSettings.documentMeta}
    >
      {pageData.interface === 'BlogDataType' && (
        <BlogHeader {...pageSettings} {...pageData} />
      )}

      {pageData.interface === 'AboutPageDataType' && (
        <Fragment>
          <PageHeader image={pageData.headerImage} title={pageSettings.title} />
          <About
            images={pageData.headerGallery}
            id="about-header"
            description={pageData.headerText}
            className="dark"
            style={{ marginBottom: 0 }}
          />
          <About
            title={pageData.aboutTitle}
            images={pageData.salonPresentationGallery}
            id="about-descritpion"
            description={pageData.salonPresentationText}
            className="middle_text"
          />
          <Team
            id="team"
            title={pageData.teamTitle}
            description={pageData.teamText}
            members={pageData.team}
          />
          <Visions
            id="founder"
            visions={[
              {
                image: pageData.founderImage,
                title: pageData.founderTitle,
                description: pageData.founderText,
              },
            ]}
          />
        </Fragment>
      )}
      <Contact
        id="contact"
        contactGroup={globalSettingsData.contactGroup}
        mapEmbedUrl={globalSettingsData.mapEmbedUrl!}
      />
      {/* <BlogPosts {...blogData} /> */}
    </Layout>
  );
};

export default Index;
