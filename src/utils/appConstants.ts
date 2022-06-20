export const instagramFeedEndpoint = (limit: number) =>
  `${process.env.INSTAGRAM_API}?limit=${limit}`;
