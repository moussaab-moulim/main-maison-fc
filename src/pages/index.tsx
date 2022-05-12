import React, { FC } from 'react';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import About from '../Containers/About/About';
import Blog from '../Containers/Blog/Blog';
import Contact from '../Containers/Contact/Contact';
import Header from '../Containers/Header/Header';
import { Layout } from '../Containers/Layout/Layout';
import Offer from '../Containers/Offer/Offer';
import Prices from '../Containers/Prices/Prices';
import Services from '../Containers/Services/Services';
import Statement from '../Containers/Statement/Statement';
import Visions from '../Containers/Visions/Visions';
import {
  mapFooterData,
  mapGlobalSettingsData,
  mapHomeData,
  mapMenuData,
  mapSeoData,
} from '../utils/mapper';
import {
  getBolgPosts,
  getGlobalSettings,
  getHomePageData,
  getMenu,
} from '../utils/queries';
import {
  FooterDataType,
  GlobalSettingsDataType,
  HomeDataType,
  LangDataType,
  MenuDataType,
  SeoDataType,
} from '../utils/types';

interface IndexProps {
  homeData: HomeDataType;
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
  const fetchedHomeData = (await getHomePageData(locale!)).data.home;
  const fetchedBolgPosts = (await getBolgPosts(locale!, 3)).data.allPosts;
  // mapping fetched data
  const menuData: MenuDataType = mapMenuData(fetchedMenu);

  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);
  const homeData: HomeDataType = mapHomeData(
    fetchedHomeData,
    globalSettingsData,
    fetchedBolgPosts
  );

  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(globalSettingsData, homeData.seo);
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      homeData,
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
  homeData,
  menuData,
  globalSettingsData,
  footerData,
  seoData,
  langData,
}) => {
  return (
    <Layout
      documentMeta={homeData.seo.documentMeta}
      seoData={seoData}
      menuItems={menuData.menuItems}
      menuActions={menuData.menuActions}
      logo={globalSettingsData.logo}
      logoInvert={globalSettingsData.logoInvert}
      footerData={footerData}
      langData={langData}
    >
      <Header {...homeData.header} />
      <About {...homeData.about} />
      <Services {...homeData.services} />
      <Prices {...homeData.prices} />
      <Visions {...homeData.visions} />
      <Blog {...homeData.blog} />
      <Offer {...homeData.offer} />
      <Statement {...homeData.statement} />
      <Contact {...homeData.contact} />
    </Layout>
  );
};

export default Index;
