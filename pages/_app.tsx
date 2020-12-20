import React from 'react';
import 'styles/globals.css';

// eslint-disable-next-line react/prop-types
export default function MyApp({ Component, pageProps }): JSX.Element {
  return <Component {...pageProps} />;
}
