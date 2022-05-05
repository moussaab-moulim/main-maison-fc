import { RichTextBlock } from 'prismic-reactjs';

interface Common {
  id: string;
}
type HrefTarget = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export interface ButtonLink {
  text: string;
  target: HrefTarget;
  url: string;
}
export interface HomeDataType {
  header: HeaderDataType;
  services: ServicesDataType;
  about: AboutDataType;
  prices: PricesDataType;
  visions: VisionDataType;
  offer: OfferDataType;
  blog: BlogDataType;
  statement: StatementDataType;
  contact: ContactDataType;
  seo: PageSettings;
}

export interface IMeta {
  id: string;
  uid: string;
  type: string;
  lang: string;
}
export interface DocumentMeta {
  meta: IMeta;
  tags?: string[];
  alternateLanguages: IMeta[];
  firstPublicationDate?: string;
  lastPublicationDate?: string;
}
export interface PageSettings {
  documentMeta: DocumentMeta;
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: string;
  url: string;
}
export interface GlobalSettingsDataType {
  siteName: string;
  description: string;
  domain: string;
  logo: ImageType;
  logoInvert: ImageType;
  favicon: FavIcon;
  contactGroup: ContactField[];
  copyrightText: RichTextBlock[];
  googleTagId?: string;
  mapEmbedUrl?: string;
  svgIcon: ImageType;
  themeColor: string;
  lang: string;
  searchConsoleKey: string;
}
export interface FavIcon {
  icon16: ImageType;
  icon32: ImageType;
  icon180: ImageType;
}

export type ContactField = RichTextBlock[];

export interface MenuDataType {
  menuItems: MenuType[];
  menuActions: ButtonLink[];
}

export interface MenuType {
  id: string;
  label: string;
  url: string;
  class: string;
  clickabale: boolean;
  parentId: string;
}
export interface HeaderDataType extends Common {
  title: string;
  description: string;
  backgroundUrl: string;
  button?: ButtonLink;
}

export interface ServiceType {
  iconUrl?: string;
  title?: string;
  description?: string;
  serviceUrl?: string;
}
export interface ImageType {
  url: string;
  alt?: string;
}
export interface VisionType {
  image: ImageType;
  title: string;
  description: string;
  button?: ButtonLink;
}
export interface ServicesDataType extends Common {
  title: string;
  services: ServiceType[];
}
export interface AboutDataType extends Common {
  title: string;
  description: RichTextBlock[];
  button?: ButtonLink;
  images: ImageType[];
}
export interface VisionDataType extends Common {
  visions: VisionType[];
}
export enum ButtonType {
  Dark = 'Dark',
  Light = 'Light',
}

export interface StatementDataType extends Common {
  background: ImageType;
  text: RichTextBlock[];
}
export interface FooterDataType {
  contactGroup: ContactField[];
  copyrightText: RichTextBlock[];
  menuItems: MenuType[];
  logo: ImageType;
}
export interface ContactDataType extends Common {
  contactGroup: ContactField[];
  mapEmbedUrl: string;
}

export interface SeoDataType {
  title: string;
  metaTitle?: string;
  metaDescription?: string;
  domain: string;
  keywords: string;
  twitterHandle?: string;
  pathUrl: string;
  image: ImageType;
  siteName: string;
  favIcon: FavIcon;
  safariIcon: ImageType;
  themeColor: string;
  locale: string;
  searchConsoleKey: string;
}

export interface LangDataType {
  currentLanguage: string;
  languages: string[];
}
export interface TreatmentType {
  category?: string;
  treatment: string;
  price: string;
  description: RichTextBlock[];
  button?: ButtonLink;
  image?: ImageType;
}
export interface PricesDataType extends Common {
  pricesTitle: string;
  pricesList: TreatmentType[];
}
export interface OfferDataType extends Common {
  offerTitle: string;
  offerImage: ImageType;
  offerDescription: RichTextBlock[];
  offerButton: ButtonLink;
}

export interface PostDataType extends PageSettings {
  cursor?: string;
  postImage: ImageType;
  postContent?: RichTextBlock[];
}
export interface BlogDataType extends Common {
  blogTitle: string;
  totalCount?: number;
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  startCursor?: string;
  endCursor?: string;
  posts: PostDataType[];
}

export interface PostPageDataType {
  post: PostDataType;
  blog: BlogDataType;
  seo: SeoDataType;
}
export interface ServiceDataType extends PageSettings {
  serviceImage: ImageType;
  treatments: TreatmentType[];
}
