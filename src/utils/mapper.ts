/* eslint-disable no-underscore-dangle */
import * as prismicH from '@prismicio/helpers';

import { linkResolver } from '../../prismicConfiguration';
import {
  BlogDataType,
  ButtonLink,
  DocumentMeta,
  FooterDataType,
  GlobalSettingsDataType,
  HomeDataType,
  ImageType,
  IMeta,
  MenuDataType,
  PageSettings,
  PostDataType,
  SeoDataType,
  ServiceDataType,
  ServiceType,
  TreatmentType,
  VisionType,
} from './types';

export const mapServices = (services: any[]): ServiceType[] => {
  return services.map((item) => ({
    iconUrl: item.icon.url,
    title: item.service_name[0].text,
    description: item.service_description[0].text,
    serviceUrl: linkResolver(item.link[0].spans[0].data),
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
  url: button.spans?.[0]?.data?.url ?? '#',
  target: button.spans?.[0]?.data?.target ?? '_self',
});

export const mapVisions = (visions: any[]): VisionType[] => {
  return visions.map((vision) => ({
    title: vision.vision_title[0].text,
    description: vision.vision_description[0].text,
    image: mapImage(vision.vision_image),
    button: mapButton(vision.vision_button[0]),
  }));
};
export const mapOffers = (offers: any[]): TreatmentType[] => {
  return offers.map((offer) => ({
    category: offer.offer_category,
    treatment: offer.offer[0].text,
    price: offer.offer_price,
    description: offer.offer_description,
  }));
};
export const mapMeta = (meta: any): IMeta => ({
  lang: meta.lang,
  uid: meta.uid,
  type: meta.type,
  id: meta.id,
});
export const mapPost = (post: any, cursor?: string): PostDataType => {
  const dateFormatter = new Intl.DateTimeFormat(post._meta.lang);
  // dateFormatter.format(prismicH.asDate(post.node._meta.firstPublicationDate)!)
  const documentMeta: DocumentMeta = {
    meta: mapMeta(post._meta),
    firstPublicationDate: dateFormatter.format(
      prismicH.asDate(post._meta.firstPublicationDate)!
    ),
    lastPublicationDate: dateFormatter.format(
      prismicH.asDate(post._meta.lastPublicationDate)!
    ),
    tags: post._meta.tags,
    alternateLanguages: post._meta.alternateLanguages.map((doc: any) =>
      mapMeta(doc)
    ),
  };
  return {
    cursor: cursor ?? '',
    title: post.title,
    postImage: mapImage(post.post_image),
    url: linkResolver(documentMeta.meta),
    postContent: post.post_content ?? '',
    documentMeta,
    metaTitle: post.meta_title ?? '',
    metaDescription: post.meta_description ?? '',
    keywords: post.keywords ?? '',
  };
};
export const mapBlog = (title: string, blog: any): BlogDataType => ({
  id: 'section-blog-id',
  blogTitle: title,
  totalCount: blog.totalCount,
  hasNextPage: blog.pageInfo.hasNextPage,
  hasPreviousPage: blog.pageInfo.hasPreviousPage,
  startCursor: blog.pageInfo.startCursor,
  endCursor: blog.pageInfo.endCursor,
  posts: blog.edges.map((post: any) => mapPost(post.node, post.cursor)),
});

export const mapHomeData = (
  queryResult: any,
  siteSettings: GlobalSettingsDataType,
  blogQueryResult: any
): HomeDataType => {
  const documentMeta: DocumentMeta = {
    meta: mapMeta(queryResult._meta),

    firstPublicationDate: queryResult._meta.firstPublicationDate,
    lastPublicationDate: queryResult._meta.lastPublicationDate,
    tags: queryResult._meta.tags,
    alternateLanguages: queryResult._meta.alternateLanguages.map((doc: any) =>
      mapMeta(doc)
    ),
  };
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
    prices: {
      id: queryResult.prices_id,
      pricesTitle: queryResult.prices_title[0].text,
      pricesList: mapOffers(queryResult.prices_list),
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
    offer: {
      id: queryResult.offer_id,
      offerTitle: queryResult.offer_title[0].text,
      offerImage: mapImage(queryResult.offer_image),
      offerDescription: queryResult.offer_description,
      offerButton: mapButton(queryResult.offer_button[0]),
    },
    blog: mapBlog('section-blog-title', blogQueryResult),
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
      documentMeta,
      url: linkResolver(documentMeta.meta),
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
    menuActions: queryResult.menu_action.map((action: any) =>
      mapButton(action.button[0])
    ),
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
  pageSettings: PageSettings
): SeoDataType => ({
  title: pageSettings.title || 'Page',
  metaTitle: pageSettings.metaTitle || pageSettings.title || 'Page',
  metaDescription: pageSettings.metaDescription,
  domain: siteSettings.domain,
  keywords: pageSettings.keywords ?? '',
  pathUrl: '/',
  image: siteSettings.svgIcon,
  siteName: siteSettings.siteName,
  favIcon: siteSettings.favicon,
  safariIcon: siteSettings.svgIcon,
  themeColor: siteSettings.themeColor,
  locale: siteSettings.lang,
  searchConsoleKey: siteSettings.searchConsoleKey,
});
export const mapBlogPage = (blog: any): PageSettings => {
  const documentMeta: DocumentMeta = {
    meta: mapMeta(blog._meta),

    firstPublicationDate: blog._meta.firstPublicationDate,
    lastPublicationDate: blog._meta.lastPublicationDate,
    tags: blog._meta.tags,
    alternateLanguages: blog._meta.alternateLanguages.map((doc: any) =>
      mapMeta(doc)
    ),
  };
  return {
    documentMeta,
    url: linkResolver(documentMeta.meta),
    title: blog.title,
    metaTitle: blog.meta_title,
    metaDescription: blog.meta_description,
    keywords: blog.keywords,
  };
};

export const mapServiceData = (service: any): ServiceDataType => {
  const dateFormatter = new Intl.DateTimeFormat(service._meta.lang);
  // dateFormatter.format(prismicH.asDate(post.node._meta.firstPublicationDate)!)
  const documentMeta: DocumentMeta = {
    meta: mapMeta(service._meta),
    firstPublicationDate: dateFormatter.format(
      prismicH.asDate(service._meta.firstPublicationDate)!
    ),
    lastPublicationDate: dateFormatter.format(
      prismicH.asDate(service._meta.lastPublicationDate)!
    ),
    tags: service._meta.tags,
    alternateLanguages: service._meta.alternateLanguages.map((doc: any) =>
      mapMeta(doc)
    ),
  };
  return {
    title: service.title,
    serviceImage: mapImage(service.service_image),
    url: linkResolver(documentMeta.meta),
    documentMeta,
    metaTitle: service.meta_title ?? '',
    metaDescription: service.meta_description ?? '',
    keywords: service.keywords ?? '',
    treatments: service.sub_service.map(
      (subService: any): TreatmentType => ({
        treatment: subService.sub_service_title,
        price: subService.sub_service_price,
        image: mapImage(subService.sub_service_image),
        description: subService.sub_service_description,
        button: mapButton(subService.sub_service_button[0]),
      })
    ),
  };
};
