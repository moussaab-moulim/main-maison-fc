// -- Prismic Repo Name
export const repoName = 'maisonfabiencarrichon';

// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = `https://${repoName}.cdn.prismic.io/api/v2`;
export const apiGraphqlEndpoint = `https://${repoName}.cdn.prismic.io/graphql`;

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken =
  'MC5ZY29JemhFQUFDVUFCbDNJ.WA8GdFA677-977-977-977-9GO-_vWBZ77-9OmTvv73vv73vv73vv71Fdg7vv70TPW3vv71cYO-_vQ';

// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc: any) => {
  if (doc.type === 'home') {
    return `/${doc.lang.split('-')[0]}`;
  }
  return '/';
};

export const hrefResolver = (doc: any) => {
  if (doc.type === 'home') {
    return `/${doc.lang.split('-')[0]}`;
  }
  return '/';
};
