import React, { FC } from 'react';

import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import About from '../Containers/About/About';
import Contact from '../Containers/Contact/Contact';
import Header from '../Containers/Header/Header';
import { Layout } from '../Containers/Layout/Layout';
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
import { getGlobalSettings, getHomePageData, getMenu } from '../utils/queries';
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
  // console.log(`local : ${locale}\n locals :${locales}\n`);
  const fetchedMenu = (await getMenu(locale!)).data.menu;
  // console.log('menu', fetchedMenu);
  const fetchedSiteSettings = (await getGlobalSettings(locale!)).data
    .site_settings;
  // console.log('fetchedSiteSettings', fetchedSiteSettings);
  const fetchedHomeData = (await getHomePageData(locale!)).data.home;

  // mapping fetched data
  const menuData: MenuDataType = mapMenuData(fetchedMenu);
  // console.log('menuMapped', menuData);
  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);
  const homeData: HomeDataType = mapHomeData(
    fetchedHomeData,
    globalSettingsData
  );

  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(globalSettingsData, homeData.seo);
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  console.log('footer data', footerData.menuItems);
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
      <Visions {...homeData.visions} />
      <Statement {...homeData.statement} />
      <Contact {...homeData.contact} />
    </Layout>
  );
};

export default Index;
