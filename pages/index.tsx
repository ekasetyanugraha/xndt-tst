import { useEffect } from 'react';
import PageContainer from 'components/PageContainer';
import Hero from 'components/Hero';
import CardUniversity from 'components/CardUniversity';
import Pagination from 'components/Pagination';
import useUniversity from 'hooks/university';

export default function Home() {
  const {
    isLoading,
    getUniversities,
    universities,
    meta,
  } = useUniversity();

  useEffect(() => {
    getUniversities();
  }, []);

  const onClickPageNum = (page) => {
    getUniversities({ limit: 10, offset: (page - 1) * 10 })
  };

  return (
    <PageContainer>
      <Hero title="Global Universities" />

      {
        isLoading && <progress className="progress is-small is-primary is-radiusless" max="100"></progress>
      }

      <main className="container py-6">
        {
          universities.map(university => <CardUniversity key={university.name} university={university} />)
        }

        {
          !!universities.length &&
          <div className="mt-4">
            <Pagination
              limit={meta.limit}
              offset={meta.offset}
              total={meta.total}
              onClickPageNum={onClickPageNum}
            />
          </div>
        }
      </main>

    </PageContainer>
  )
}
