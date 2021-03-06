import React, { useEffect } from 'react';
import { User } from 'interfaces/user';
import PageContainer from 'components/PageContainer';
import Hero from 'components/Hero';
import FormSearch from 'components/FormSearch';
import CardUniversity from 'components/CardUniversity';
import Pagination from 'components/Pagination';
import useUniversity from 'hooks/university';

export { getServerSideProps } from 'helpers/ssr-helper';

interface Props {
  user?: User;
}

export default function Index({ user }: Props): JSX.Element {
  const { isLoading, getUniversities, universities, meta } = useUniversity();

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <PageContainer user={user}>
      <Hero title="Global Universities" />

      {isLoading && <progress className="progress is-small is-primary is-radiusless" max="100"></progress>}

      <main className="container py-6">
        <div className="mb-4">
          <FormSearch onSubmit={getUniversities} />
        </div>

        {!isLoading && !universities.length && (
          <div className="notification is-warning">We can&apos;t find what you are searching for.</div>
        )}

        {universities.map((university) => (
          <CardUniversity key={university.name} university={university} />
        ))}

        {!!universities.length && (
          <div className="mt-4">
            <Pagination limit={meta.limit} offset={meta.offset} total={meta.total} onChangePage={getUniversities} />
          </div>
        )}
      </main>
    </PageContainer>
  );
}
