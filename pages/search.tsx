import React, { useState } from 'react';
import PageContainer from 'components/PageContainer';
import FormSearch from 'components/FormSearch';
import CardUniversity from 'components/CardUniversity';
import Pagination from 'components/Pagination';
import useUniversity from 'hooks/university';
import UrlParamsUniversity from 'interfaces/url-params-university';

export default function Search(): JSX.Element {
  const { isLoading, getUniversities, universities, meta } = useUniversity();

  const [submitted, setSubmitted] = useState(false);

  const onSubmitSearch = (payload: UrlParamsUniversity) => {
    setSubmitted(true);
    getUniversities(payload);
  };

  return (
    <PageContainer>
      {isLoading && <progress className="progress is-small is-primary is-radiusless" max="100"></progress>}

      <main className="container py-6">
        <div className="mb-4">
          <FormSearch onSubmit={onSubmitSearch} />
        </div>
        {submitted && !isLoading && !universities.length && (
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
