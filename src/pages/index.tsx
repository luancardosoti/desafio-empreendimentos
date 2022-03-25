import Head from 'next/head';
import { Container } from '../styles/home';

import { Header } from '../components/Header';
import { FiSearch } from 'react-icons/fi';
import Card from '../components/Card';
import { GetServerSideProps } from 'next';
import api from '../services/api';
import { useEffect, useState } from 'react';
import ModalEnterprise from '../components/ModalEnterprise';

export interface Enterprise {
  id: string;
  name: string;
  status: string;
  purpose: string;
  ri_number: string;
  address_label: string;
  address: {
    district: string;
    city: string;
    street: string;
    state: string;
    number: string;
    cep: string;
  };
}

interface HomeProps {
  enterprises: Enterprise[];
}

export default function Home({ enterprises }: HomeProps) {
  const [openModal, setOpenModal] = useState(false);
  const [enterprisesList, setEnterprises] = useState(enterprises);

  const submitOpenModal = (enterprise?: Enterprise) => setOpenModal(true);
  const submitCloseModal = (enterprise?: Enterprise) => {
    setOpenModal(false);
    console.log('Enterprise do Modal: ', enterprise);
    if (enterprise) {
      let enterpriseExist = enterprises.find(
        (element) => element.id === enterprise.id
      );

      if (enterpriseExist) {
        console.log('Atualizando enterprise');
        // atualizar
        let newEnterprises: Enterprise[] = enterprises.map((enterprise) => {
          if (enterpriseExist.id === enterprise.id) {
            return {
              ...enterpriseExist,
              address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.district}, ${enterprise.address.city}`,
            };
          } else {
            return enterprise;
          }
        });

        setEnterprises(newEnterprises);
        console.log('Nova lista: ', newEnterprises);
      } else {
        let newEnterprise = {
          ...enterprise,
          address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.district}, ${enterprise.address.city}`,
        };
        setEnterprises([newEnterprise, ...enterprisesList]);
      }
    }
  };

  const deleteEnterprise = () => alert('Deletar!');

  useEffect(() => {
    console.log(enterprisesList);
  }, [enterprisesList]);

  return (
    <>
      <Head>
        <title>Home | Algo</title>
      </Head>
      <Container>
        <Header onClick={submitOpenModal} />
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

        <div className="list">
          {enterprisesList.length > 0 ? (
            enterprisesList
              .reverse()
              .map((element) => (
                <Card
                  key={element.id}
                  enterprise={element}
                  editEnterprise={submitOpenModal}
                  deleteEnterprise={deleteEnterprise}
                />
              ))
          ) : (
            <h1>Nenhuma empresa cadastrada!</h1>
          )}
        </div>

        {openModal && <ModalEnterprise submitCloseModal={submitCloseModal} />}
      </Container>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  let enterprisesResponse: Omit<Enterprise, 'address_label'>[] = [];

  await api
    .get<Omit<Enterprise, 'address_label'>[]>('/enterprises')
    .then((response) => {
      enterprisesResponse = response.data;
    })
    .catch((error) => {
      console.log('Erro na requisição GET');
      console.log('path: "/enterprises"');
    });

  let enterprises: Enterprise[] = enterprisesResponse.map((enterprise) => {
    return {
      ...enterprise,
      address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.district}, ${enterprise.address.city}`,
    };
  });

  return {
    props: {
      enterprises,
    },
  };
};
