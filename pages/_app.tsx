import Header from '../components/StickyHeader';
import Footer from '../components/StickyFooter';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
html,
body {
    margin: 0;
    background-color: #fb7652;
    font-family: monospace;
    *, ::before, ::after {
      box-sizing: border-box;
    }
}
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
