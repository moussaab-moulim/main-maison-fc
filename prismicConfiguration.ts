import { IMeta } from './src/utils/types';

// -- Prismic Repo Name
export const repoName = 'main-maisonfabiencarrichon';

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;
export const apiGraphqlEndpoint = `https://${repoName}.cdn.prismic.io/graphql`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  'MC5ZbUdiY0JjQUFHZlpJM0c3.77-9CO-_ve-_ve-_vR_vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv73vv70p77-977-9FO-_ve-_ve-_ve-_ve-_ve-_vUjvv70';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: IMeta) => {
  const langPrefix = doc.lang === 'fr' ? '' : '/en';
  if (doc.type === 'post') {
    return `${langPrefix}/blog/${doc.uid}`;
  }
  if (doc.type === 'service') {
    return `${langPrefix}/service/${doc.uid}`;
  }
  if (doc.type === 'about') {
    return `${langPrefix}/${doc.uid}`;
  }
  if (doc.type === 'blog') {
    // TODO add blog en version
    return `${langPrefix}/${doc.uid}`;
  }
  if (doc.type === 'home') {
    return `${langPrefix}`;
  }
  return '/';
};
export const webLinkResolver = (url: string) => {
  return url.replace('https://', '');
};

export const hrefResolver = (doc: any) => {
  if (doc.type === 'home') {
    return `/${doc.lang}`;
  }
  return '/';
};
