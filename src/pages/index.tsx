import Head from 'next/head';
import { Container } from '../styles/home';

import { Header } from '../components/Header';
import { FiSearch } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Algo</title>
      </Head>
      <Container>
        <Header onClick={() => alert('Olá modal!')} />
        <div className="search">
          <label className="groupInput" htmlFor="input-search">
            <FiSearch />
            <input
              type="text"
              name="input-search"
              id="input-search"
              placeholder="Buscar"
            />
          </label>
        </div>
      </Container>
    </>
  );
}
