import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import API from '../services/universities'

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    API.getUniversities();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.9.1/css/bulma.min.css" integrity="sha512-ZRv40llEogRmoWgZwnsqke3HNzJ0kiI0+pcMgiz2bxO6Ew1DVBtWjVn0qjrXdT3+u+pSN36gLgmJiiQ3cQtyzA==" crossOrigin="anonymous" />
        </Head>

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
        </main>

        <Footer />
      </div>
    )
  }
}
