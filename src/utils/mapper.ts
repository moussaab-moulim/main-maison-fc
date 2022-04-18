import {
  ButtonLink,
  FooterDataType,
  GlobalSettingsDataType,
  HomeDataType,
  ImageType,
  MenuDataType,
  PageSeoDataType,
  SeoDataType,
  ServiceType,
  VisionType,
} from './types';

export const mapServices = (services: any[]): ServiceType[] => {
  return services.map((item) => ({
    iconUrl: item.icon.url,
    title: item.service_name[0].text,
    description: item.service_description[0].text,
    serviceUrl: '#',
  }));
};

export const mapImage = (image: any): ImageType => ({
  url: image.url,
  alt: image.alt,
});
export const mapImages = (images: any[]): ImageType[] => {
  return images.map((image) => mapImage(image));
};

export const mapButton = (button: any): ButtonLink => ({
  text: button.text,
  url: button.spans[0]?.data.url ?? '#',
  target: button.spans[0]?.data.target ?? '_self',
});

export const mapVisions = (visions: any[]): VisionType[] => {
  return visions.map((vision) => ({
    title: vision.vision_title[0].text,
    description: vision.vision_description[0].text,
    image: mapImage(vision.vision_image),
    button: mapButton(vision.vision_button[0]),
  }));
};

export const mapHomeData = (
  queryResult: any,
  siteSettings: GlobalSettingsDataType
): HomeDataType => {
  return {
    header: {
      id: queryResult.header_id,
      title: queryResult.header_slider[0].header_title[0].text,
      description: queryResult.header_slider[0].header_description[0].text,
      backgroundUrl: queryResult.header_slider[0].header_background.url,
      button: mapButton(queryResult.header_slider[0].header_button[0]),
    },
    services: {
      id: queryResult.services_id,
      title: queryResult.services_title[0].text,
      services: mapServices(queryResult.services_group),
    },
    about: {
      id: queryResult.salon_id,
      title: queryResult.salon_title[0].text,
      description: queryResult.salon_description,
      button: mapButton(queryResult.salon_button[0]),
      images: mapImages(
        queryResult.salon_images.map(
          (salon_image: any) => salon_image.salon_image
        )
      ),
    },
    visions: {
      id: queryResult.vision_id,
      visions: mapVisions(queryResult.vision_group),
    },
    statement: {
      id: queryResult.statement_id,
      background: mapImage(queryResult.statement_background),
      text: queryResult.statement_text,
    },
    contact: {
      id: queryResult.contact_id,
      contactGroup: siteSettings.contactGroup,
      mapEmbedUrl: siteSettings.mapEmbedUrl!,
    },
    seo: {
      title: queryResult.title,
      metaTitle: queryResult.meta_title,
      metaDescription: queryResult.meta_description,
      keywords: queryResult.keywords,
    },
  };
};

export const mapMenuData = (queryResult: any): MenuDataType => {
  return {
    menuItems: queryResult.menu_items.map((item: any) => ({
      id: item.id,
      label: item.label,
      url: item.url,
      class: item.class,
      clickabale: item.clickabale,
      parentId: item.parent_id,
    })),
    menuAction: {
      label: queryResult.menu_action[0].label,
      url: queryResult.menu_action[0].url,
    },
  };
};
export const mapGlobalSettingsData = (
  queryResult: any
): GlobalSettingsDataType => {
  return {
    siteName: queryResult.site_name,
    description: queryResult.description,
    domain: queryResult.domain,
    logo: mapImage(queryResult.logo),
    logoInvert: mapImage(queryResult.logo),
    favicon: {
      icon16: mapImage(queryResult.favicon),
      icon32: mapImage(queryResult.favicon.icon32),
      icon180: mapImage(queryResult.favicon.icon180),
    },
    contactGroup: queryResult.contact_group.map(
      (item: any) => item.contact_field
    ),
    copyrightText: queryResult.copyright_text,
    googleTagId: queryResult.google_tag_id,
    mapEmbedUrl: queryResult.map_embed_url,
    svgIcon: mapImage(queryResult.svgicon),
    themeColor: queryResult.theme_color,
    // eslint-disable-next-line no-underscore-dangle
    lang: queryResult._meta.lang,
    searchConsoleKey: queryResult.search_console_verification_key ?? '',
  };
};

export const mapFooterData = (
  siteSettings: GlobalSettingsDataType,
  menu: MenuDataType
): FooterDataType => ({
  contactGroup: siteSettings.contactGroup,
  copyrightText: siteSettings.copyrightText,
  logo: siteSettings.logo,
  menuItems: menu.menuItems,
});

export const mapSeoData = (
  siteSettings: GlobalSettingsDataType,
  pageSettings: PageSeoDataType
): SeoDataType => ({
  title: pageSettings.title || 'Page',
  metaTitle: pageSettings.metaTitle || pageSettings.title || 'Page',
  metaDescription: pageSettings.metaDescription,
  domain: siteSettings.domain,
  keywords: pageSettings.keywords,
  pathUrl: '/',
  image: siteSettings.svgIcon,
  siteName: siteSettings.siteName,
  favIcon: siteSettings.favicon,
  safariIcon: siteSettings.svgIcon,
  themeColor: siteSettings.themeColor,
  locale: siteSettings.lang,
  searchConsoleKey: siteSettings.searchConsoleKey,
});
