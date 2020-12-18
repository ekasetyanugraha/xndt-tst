import { useState } from 'react';
import PageContainer from '../components/PageContainer';
import FormSearch from '../components/FormSearch';
import CardUniversity from '../components/CardUniversity';
import Pagination from '../components/Pagination';
import useUniversity from '../hooks/university';

export default function Search() {
  const {
    isLoading,
    getUniversities,
    universities,
  } = useUniversity();

  const onSubmitSearch = payload => getUniversities(payload);

  const onClickPageNum = (page) => {
    getUniversities({ limit: 10, offset: (page - 1) * 10 })
  };

  return (
    <PageContainer>
      {
        isLoading && <progress className="progress is-small is-primary is-radiusless" max="100"></progress>
      }

      <main className="container py-6">
        <div className="mb-4">
          <FormSearch onSubmit={onSubmitSearch} />
        </div>

        {
          universities.map(university => <CardUniversity key={university.name} university={university} />)
        }

        {
          !!universities.length &&
          <div className="mt-4">
            <Pagination
              onClickPageNum={onClickPageNum}
            />
          </div>
        }
      </main>
    </PageContainer>
  )
}
