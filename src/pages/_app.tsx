import React, { useEffect } from 'react';

import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import TagManager from 'react-gtm-module';
import { ThemeProvider } from 'styled-components';

import '../styles/main.css';
import { GlobalStyles, mainTheme } from '../styles/theme';

const tagManagerArgs = {
  gtmId: 'GTM-M6JQ8JJ',
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs);
  }, []);
  return (
    <ThemeProvider theme={mainTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(MyApp);
