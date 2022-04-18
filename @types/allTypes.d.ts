import 'styled-components';

declare module 'apollo-link-prismic';
declare module 'react-reveal/Fade';
declare module 'styled-components' {
  export interface DefaultTheme {
    firstColor: string;
    secondColor: string;
    thirdColor: string;
    doreColor: string;
    whiteColor: string;

    backgrounColor: string;

    textColor: string;
    textColorLite: string;
    textColorCmall: string;

    h1FontSize: string;
    h2FontSize: string;
    h3FontSize: string;
    normalFontSize: string;
    smallFontSize: string;

    titleFont: string;
    bodyFont: string;
  }
}
