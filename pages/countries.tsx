import React from 'react';
import { User } from 'interfaces/user';
import PageContainer from 'components/PageContainer';
import Hero from 'components/Hero';
import CountryUniversities from 'components/CountryUniversities';

export { getServerSideProps } from 'helpers/ssr-helper';

interface Props {
  user?: User;
}

const countrySets = [
  ['US', 'CA', 'ID'],
  ['AU', 'SG', 'MY'],
  ['SE', 'NL', 'DE'],
  ['RU', 'RS', 'CZ'],
];

export default function Countries({ user }: Props): JSX.Element {
  return (
    <PageContainer user={user}>
      <Hero title="Best of The Best" subtitle="Find top universities in your countries" />

      <main className="container py-6">
        {countrySets.map((countries, i) => (
          <div key={`countrySets-${i}`} className="tile is-ancestor">
            {countries.map((country) => (
              <div key={country} className="tile is-parent">
                <article className="tile is-child">
                  <CountryUniversities country={country} />
                </article>
              </div>
            ))}
          </div>
        ))}
      </main>
    </PageContainer>
  );
}
