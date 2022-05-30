import React, { Fragment, ReactNode, useEffect, useState } from 'react';

import { NextSeo } from 'next-seo';

import { linkResolver } from '../../../prismicConfiguration';
import {
  ButtonLink,
  DocumentMeta,
  FooterDataType,
  ImageType,
  IMeta,
  LangDataType,
  MenuType,
  SeoDataType,
} from '../../utils/types';
import Footer from './Footer';
import Header from './Header';
import HeaderMobile from './HeaderMobile';

type LayoutProps = {
  seoData: SeoDataType;
  menuItems?: MenuType[];
  menuActions?: ButtonLink[];
  logo?: ImageType;
  logoInvert?: ImageType;
  children: ReactNode;
  footerData: FooterDataType;
  langData: LangDataType;
  documentMeta: DocumentMeta;
};

const Layout = ({
  seoData,
  menuItems,
  children,
  logo,
  menuActions,
  footerData,
  langData,
  documentMeta,
}: LayoutProps) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  return (
    <Fragment>
      {/* @ts-ignore */}
      <NextSeo
        title={seoData.metaTitle}
        titleTemplate={`%s | ${seoData.siteName}`}
        description={seoData.metaDescription}
        openGraph={{
          title: seoData.metaTitle,
          description: seoData.metaDescription,
          url: seoData.domain + seoData.pathUrl,
          type: 'website',
          locale: seoData.locale,
          site_name: seoData.siteName,
          images: seoData.image
            ? [
                {
                  url: seoData.image.url.replace('auto=compress,format&', ''),
                  alt: seoData.image.alt,
                  type: 'image/jpeg',
                  width: 1200,
                  height: 630,
                },
              ]
            : [],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: seoData.twitterHandle,
        }}
        additionalMetaTags={[
          {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
          },
          {
            httpEquiv: 'x-ua-compatible',
            content: 'IE=edge',
          },
          {
            name: 'keywords',
            content: seoData.keywords,
          },
          {
            name: 'msapplication-TileColor',
            content: seoData.themeColor,
          },
          {
            name: 'theme-color',
            content: seoData.themeColor,
          },
          {
            name: 'google-site-verification',
            content: seoData.searchConsoleKey,
          },
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: seoData.favIcon?.icon32?.url ?? '',
            sizes: '32x32',
            type: 'image/png',
          },
          {
            rel: 'icon',
            href: seoData.favIcon?.icon16?.url ?? '',
            sizes: '16x16',
            type: 'image/png',
          },
          {
            rel: 'apple-touch-icon',
            href: seoData.favIcon?.icon180?.url ?? '',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            rel: 'mask-icon',
            href: seoData.safariIcon.url,
            color: seoData.themeColor,
          },

          {
            rel: 'preload',
            href: '/fonts/Montserrat/Montserrat-ExtraLight.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/Montserrat/Montserrat-Light.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/Montserrat/Montserrat-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/Montserrat/Montserrat-Medium.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/Montserrat/Montserrat-SemiBold.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/PTSans/PTSans-Bold.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/PTSans/PTSans-Regular.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'preload',
            href: '/fonts/AtlanticCruise/AtlanticCruise.woff2',
            as: 'font',
            type: 'font/woff2',
            crossOrigin: 'anonymous',
          },
          {
            rel: 'alternate',
            hrefLang: documentMeta.meta.lang,
            href: `${seoData.domain}${linkResolver(documentMeta.meta)}`,
          },
          ...documentMeta.alternateLanguages.map((doc: IMeta) => ({
            rel: 'alternate',
            hrefLang: doc.lang,
            href: `${seoData.domain}${linkResolver(doc)}`,
          })),
        ]}
      />
      <Fragment>
        {isMobile ? (
          <HeaderMobile
            documentMeta={documentMeta}
            menuItems={menuItems}
            logo={logo}
            menuActions={menuActions}
            langData={langData}
          />
        ) : (
          <Header
            documentMeta={documentMeta}
            menuItems={menuItems}
            logo={logo}
            menuActions={menuActions}
            langData={langData}
          />
        )}
        <main>{children}</main>

        <Footer
          {...footerData}
          documentMeta={documentMeta}
          langData={langData}
        />
      </Fragment>
    </Fragment>
  );
};

export { Layout };
