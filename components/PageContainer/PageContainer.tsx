import Head from 'components/Head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

export default function PageContainer(props) {
  return (
    <div>
      <Head />

      <Navbar user={props.user} />

      {props.children}

      <Footer />
    </div>
  )
}
