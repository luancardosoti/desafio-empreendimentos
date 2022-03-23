import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globals";

const theme = {
  colors: {
    primary: "#fafafa",
  },
};
 
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
 
export default MyApp;