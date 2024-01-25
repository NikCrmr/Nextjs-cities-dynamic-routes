import GlobalStyle from "../styles";
import Layout from "./cities/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
