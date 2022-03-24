import Head from 'next/head';
import { Container } from '../styles/home';

import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Algo</title>
      </Head>
      <Container>
        <Header onClick={() => alert('Olá modal!')} />
      </Container>
    </>
  );
}
