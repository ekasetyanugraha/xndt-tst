import React from 'react';
import Head from 'components/Head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import { User } from 'interfaces/user';

interface Props {
  user?: User;
  children?: JSX.Element | JSX.Element[];
}

export default function PageContainer({ user, children }: Props): JSX.Element {
  return (
    <div>
      <Head />

      <Navbar user={user} />

      {children}

      <Footer />
    </div>
  );
}
