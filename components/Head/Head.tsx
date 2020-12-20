import React from 'react';
import Head from 'next/head';

const DEFAULT_TITLE = 'Eka Setya Nugraha - xndt-tst';

interface Props {
  title?: string;
}

export default function PageHead({ title = DEFAULT_TITLE }: Props): JSX.Element {
  return (
    <Head>
      <title>{title}</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css"
        integrity="sha512-ZRv40llEogRmoWgZwnsqke3HNzJ0kiI0+pcMgiz2bxO6Ew1DVBtWjVn0qjrXdT3+u+pSN36gLgmJiiQ3cQtyzA=="
        crossOrigin="anonymous"
      />
    </Head>
  );
}
