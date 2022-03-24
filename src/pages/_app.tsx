import { CustomThemeProvider } from '../context/ThemeContextData';
import { GlobalStyle } from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CustomThemeProvider>
        <GlobalStyle />
        <Component {...pageProps} />
      </CustomThemeProvider>
    </>
  );
}

export default MyApp;
