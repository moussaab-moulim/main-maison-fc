import { InMemoryCache } from 'apollo-cache-inmemory';
import ApolloClient from 'apollo-client';
import { PrismicLink } from 'apollo-link-prismic';
import gql from 'graphql-tag';

import { accessToken, apiGraphqlEndpoint } from '../../prismicConfiguration';

export const client = new ApolloClient({
  link: PrismicLink({
    uri: apiGraphqlEndpoint,
    accessToken,
  }),
  cache: new InMemoryCache(),
});

const metaQuery = `
_meta {
  type
  id
  uid
  firstPublicationDate
  lastPublicationDate
  lang
  tags
  alternateLanguages{
    lang
    uid
    type
    id
  }
}
`;
const postMainQuery = `
${metaQuery}
featrured_image
title
post_image`;
export const getHomePageData = async (lang: string) => {
  return client.query({
    query: gql`
      query {
        home(uid: "home", lang: "${lang}") {
          ${metaQuery}
          featrured_image
          title
          meta_title
          meta_description
          keywords
          header_id
          services_id
          prices_id
          salon_id
          prices_id
          vision_id
          offer_id
          statement_id
          contact_id
          header_slider {
            header_title
            header_description
            header_background
            header_button
          }
          services_title
          services_group {
            icon
            service_name
            service_description
            link
          }
          prices_title
          prices_list{
            offer_category
            offer
            offer_price
            offer_description
            offer_link
          }
          salon_title
          salon_description
          salon_button
          salon_images {
            salon_image
          }
          vision_group {
            vision_image
            vision_title
            vision_description
            vision_button
          }
          offer_title
          offer_image
          offer_description
          offer_button
          statement_background
          statement_text
        }
      }
    `,
  });
};

export const getMenu = async (lang: string) => {
  return client.query({
    query: gql`
      query {
        menu(uid: "menu", lang: "${lang}") {
          ${metaQuery}
          menu_items {
            id
            label
            url
            class
            clickabale
            parent_id
          }
          menu_action {
            button
          }
        }
      }
    `,
  });
};
export const getGlobalSettings = async (lang: string) => {
  return client.query({
    query: gql`
      query {
        site_settings(uid: "site_settings", lang: "${lang}") {
          ${metaQuery}
          site_name
          description
          domain
          logo
          logo_invert
          favicon
          svgicon
          contact_group {
            contact_field
          }
          copyright_text
          google_tag_id
          search_console_verification_key
          map_embed_url
          map_coordinates
          theme_color
        }
      }
    `,
  });
};

export const getBolgPosts = async (lang?: string, count?: number) => {
  return client.query({
    query: gql`
      query {
        allPosts(${
          lang === undefined ? '' : `lang: "${lang}"`
        }, sortBy: meta_firstPublicationDate_DESC${
      count === undefined ? '' : `,first:${count}`
    }) {
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              ${postMainQuery}
            }
          }
        }
      }
    `,
  });
};
export const getBolgPost = async (uid: string, lang: string) => {
  return client.query({
    query: gql`
      query {
        post(uid:"${uid}",lang: "${lang}") {
          
            ${postMainQuery}
              meta_title
              meta_description
              keywords
              post_content
            
        }
      }
    `,
  });
};
export const getBolgPage = async (uid: string, lang: string) => {
  return client.query({
    query: gql`
      query {
        blog(uid:"${uid}",lang: "${lang}") {
          
            ${metaQuery}
            featrured_image
            title
              meta_title
              meta_description
              keywords
            
        }
      }
    `,
  });
};
export const getServicePages = async () => {
  return client.query({
    query: gql`
      query {
        allServices {
          totalCount
          pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
          }
          edges {
            cursor
            node {
              ${metaQuery}
            }
          }
        }
      }
    `,
  });
};

export const getServicePage = async (uid: string, lang: string) => {
  return client.query({
    query: gql`
      query {
        service(uid:"${uid}",lang: "${lang}")
        {
          ${metaQuery}
          featrured_image
          meta_title
          meta_description
          keywords
          title
          header_id
          service_image
          sub_service {
            sub_service_title
            sub_service_image
            sub_service_price
            sub_service_description
            sub_service_button
          }
        }
      }
    `,
  });
};

export const getPages = async (types: string[]) => {
  return client.query({
    query: gql`
      query {
        _allDocuments(type_in: [${types.reduce(
          (previousValue, currentValue) =>
            `"${previousValue}","${currentValue}"`
        )}]) {
          edges {
            node {
              ${metaQuery}
            }
          }
        }
      }
    `,
  });
};

export const getAboutPage = async (uid: string, lang: string) => {
  return client.query({
    query: gql`
      query {
        about(uid:"${uid}",lang: "${lang}") {
          
              ${metaQuery}
              featrured_image
              title
              meta_title
              meta_description
              keywords
              header_image
              header_text
              header_gallery{
                header_gallery_image
              }
              about_title
              salon_presentation_title
              salon_presentation_text
              salon_presentation_gallery{
                salon_presentation_image
              }
              founder_title
              founder_text
              founder_image
              team_title
              team_text
              team_members{
                member_image
                member_name
                member_text
                member_role
              }
            
        }
      }
    `,
  });
};
