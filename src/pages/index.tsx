import styled from 'styled-components';
import Head from 'next/head';
import { Container } from '../styles/home';

import { FiPlus } from 'react-icons/fi';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Algo</title>
      </Head>
      <Container>
        <Header>
          <h1>Empreendimentos</h1>
          <button>
            Adicionar
            <FiPlus />
          </button>
        </Header>
      </Container>
    </>
  );
}

const Header = styled.header`
  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
  }

  span {
    color: blue;
  }
`;
