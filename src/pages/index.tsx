import Head from 'next/head';
import { Container } from '../styles/home';

import { Header } from '../components/Header';
import { FiSearch } from 'react-icons/fi';
import Card from '../components/Card';
import { GetServerSideProps } from 'next';
import api from '../services/api';
import { useEffect, useState } from 'react';
import ModalEnterprise from '../components/ModalEnterprise';
import ConfirmationModal from '../components/ConfirmationModal';

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
  const [openConfirmationModal, setOpenConfirmationModal] = useState({
    open: false,
    item: null,
  });

  const [openModal, setOpenModal] = useState(false);
  const [enterpriseInEdition, setEnterpriseInEdition] =
    useState<Enterprise>(null);
  const [enterprisesList, setEnterprises] = useState(enterprises);

  const submitOpenModal = (enterprise?: Enterprise) => {
    setEnterpriseInEdition(enterprise);
    setOpenModal(true);
  };
  const submitCloseModal = (enterprise?: Enterprise) => {
    setOpenModal(false);
    console.log('Enterprise do Modal: ', enterprise);
    if (enterprise) {
      let enterpriseExist = enterprisesList.find(
        (element) => element.id === enterprise.id
      );
      console.log('Enterprise Existe na lista?: ', enterprise);

      if (enterpriseExist) {
        console.log('Atualizando enterprise');

        let newEnterprises: Enterprise[] = enterprisesList.map((element) => {
          if (enterprise.id === element.id) {
            return {
              ...enterprise,
              address_label: `${element.address.street}, ${element.address.number} - ${element.address.district}, ${element.address.city}`,
            };
          } else {
            return element;
          }
        });

        setEnterprises(newEnterprises);
      } else {
        let newEnterprise = {
          ...enterprise,
          address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.district}, ${enterprise.address.city}`,
        };
        setEnterprises([newEnterprise, ...enterprisesList]);
      }
    }
  };

  const deleteEnterprise = async (id) => {
    let response = await api.delete(`/enterprises/${id}`);

    if (response.status === 200) {
      const newList = enterprisesList.filter((item) => item.id !== id);
      setEnterprises(newList);
    }
  };

  useEffect(() => {
    console.log(enterprisesList);
  }, [enterprisesList]);

  return (
    <>
      <Head>
        <title>Home | Algo</title>
      </Head>
      <Container>
        <Header openModal={submitOpenModal} />
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
            enterprisesList.reverse().map((element) => (
              <Card
                key={element.id}
                enterprise={element}
                editEnterprise={submitOpenModal}
                deleteEnterprise={() => {
                  setOpenConfirmationModal({
                    item: element,
                    open: true,
                  });
                }}
              />
            ))
          ) : (
            <h3>Nenhuma empresa cadastrada!</h3>
          )}
        </div>

        {openModal && (
          <ModalEnterprise
            submitCloseModal={submitCloseModal}
            enterprise={enterpriseInEdition}
          />
        )}

        {openConfirmationModal.open && (
          <ConfirmationModal
            title="Excluir empreendimento?"
            text={`Você tem certeza que deseja excluir o empreendimento: <strong>${openConfirmationModal.item.name}</strong>? esta acão é irreversível.`}
            functionOnConfirmation={() => {
              deleteEnterprise(openConfirmationModal.item.id);
              setOpenConfirmationModal({
                item: null,
                open: false,
              });
            }}
            functionNotConfirm={() => {
              setOpenConfirmationModal({
                item: null,
                open: false,
              });
            }}
          />
        )}
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
