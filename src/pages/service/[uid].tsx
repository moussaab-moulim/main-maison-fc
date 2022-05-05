/* eslint-disable no-underscore-dangle */
import React, { FC } from 'react';

import { GetStaticPaths, GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { linkResolver } from '../../../prismicConfiguration';
import { Layout } from '../../Containers/Layout/Layout';
import ServiceContent from '../../Containers/Services/ServiceContent';
import ServiceHeader from '../../Containers/Services/ServiceHeader';
import {
  mapFooterData,
  mapGlobalSettingsData,
  mapMenuData,
  mapSeoData,
  mapServiceData,
} from '../../utils/mapper';
import {
  getGlobalSettings,
  getMenu,
  getServicePage,
  getServicePages,
} from '../../utils/queries';
import {
  FooterDataType,
  GlobalSettingsDataType,
  LangDataType,
  MenuDataType,
  SeoDataType,
  ServiceDataType,
} from '../../utils/types';

interface IndexProps {
  serviceData: ServiceDataType;
  menuData: MenuDataType;
  globalSettingsData: GlobalSettingsDataType;
  footerData: FooterDataType;
  seoData: SeoDataType;
  langData: LangDataType;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const fetchedServicesPages = (await getServicePages()).data.allServices.edges;
  return {
    paths: fetchedServicesPages.map((service: any) =>
      linkResolver(service.node._meta)
    ),
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
  const fetchedServiceData = (
    await getServicePage(params!.uid as string, locale!)
  ).data.service;
  // mapping fetched data
  const menuData: MenuDataType = mapMenuData(fetchedMenu);
  const globalSettingsData: GlobalSettingsDataType =
    mapGlobalSettingsData(fetchedSiteSettings);
  const serviceData: ServiceDataType = mapServiceData(fetchedServiceData);
  console.log('service data ===', serviceData);
  // mapping mapped data
  const footerData: FooterDataType = mapFooterData(
    globalSettingsData,
    menuData
  );

  const seoData: SeoDataType = mapSeoData(globalSettingsData, serviceData);
  // const { currentLang, isMyMainLanguage } = manageLocal(locales!, locale!);
  return {
    props: {
      ...(await serverSideTranslations(locale!, ['common'])),
      serviceData,
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
  serviceData,
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
      documentMeta={serviceData.documentMeta}
    >
      <ServiceHeader
        image={serviceData.serviceImage}
        title={serviceData.title}
      />
      <ServiceContent treatments={serviceData.treatments!} />
    </Layout>
  );
};

export default Index;
