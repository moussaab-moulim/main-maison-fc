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
// TODO fix lang
export const getHomePageData = async (lang: string) => {
  return client.query({
    query: gql`
      query {
        home(uid: "home", lang: "${lang}") {
          _meta {
            id
            uid
          }
          title
          meta_title
          meta_description
          keywords
          header_id
          services_id
          salon_id
          prices_id
          vision_id
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
          _meta {
            uid
          }
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
          _meta {
            uid
            lang
          }
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
          theme_color
        }
      }
    `,
  });
};
