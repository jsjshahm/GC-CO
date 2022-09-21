import React, { useState } from 'react';

import RootStore from '../store';
import { RootContext } from '../store/context';
import GlobalStyle from '../styles/global-style';

function MyApp({ Component, pageProps }) {
  const [rootStore] = useState(() => new RootStore());

  return (
    <>
      <GlobalStyle />
      <RootContext.Provider value={rootStore}>
        <Component {...pageProps} />
      </RootContext.Provider>
    </>
  );
}

export default MyApp;
