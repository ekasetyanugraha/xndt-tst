import Head from '../Head';
import Navbar from '../Navbar';
import Footer from '../Footer';

export default function PageContainer(props) {
  return (
    <div>
      <Head />

      <Navbar />

      {props.children}

      <Footer />
    </div>
  )
}
