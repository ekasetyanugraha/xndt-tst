import { useEffect } from 'react';
import Head from '../components/Head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CardUniversity from '../components/CardUniversity';
import Pagination from '../components/Pagination';
import useUniversity from '../hooks/university';

export default function Home() {
  const { getUniversities, universities } = useUniversity();

  useEffect(() => {
    getUniversities();
  }, []);

  return (
    <div>
      <Head />

      <Navbar />

      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">
              Global Universities
            </h1>
            <h2 className="subtitle">
              Primary subtitle
            </h2>
          </div>
        </div>
      </section>

      <main className="container py-6">
        <div className="mb-4">
          <Pagination
            onClickPageNum={page => getUniversities({ limit: 10, offset: (page - 1) * 10 })}
          />
        </div>
        {
          universities.map(university => <CardUniversity key={university.name} university={university} />)
        }
        <div className="mt-4">
          <Pagination
            onClickPageNum={page => getUniversities({ limit: 10, offset: (page - 1) * 10 })}
          />
        </div>
      </main>

      <Footer />
    </div>
  )
}
