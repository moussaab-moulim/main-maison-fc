export const instagramFeedEndpoint = (accessToken: string) =>
  `https://graph.instagram.com/me/media?fields=id,media_type,media_url,permalink,caption,username,timestamp&access_token=${accessToken}`;
