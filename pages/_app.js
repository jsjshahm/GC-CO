import { StoreProvider } from '../store/StoreProvider';
import Header from '../components/ui/Header';
import Sidebar from '../components/ui/Sidebar';
import GlobalStyle from '../styles/global-style';

function MyApp({ Component, pageProps }) {
  return (
    // <StoreProvider {...pageProps}>
    //   <GlobalStyle />
    //   <Header />
    //   <Sidebar />
    //   <Component {...pageProps} />
    // </StoreProvider>
    <>
      <GlobalStyle />
      <StoreProvider {...pageProps}>
        <Header />
        <Sidebar />
        <Component {...pageProps} />
      </StoreProvider>
    </>
  );
}

export default MyApp;
