import Head from 'next/head';
import { Container } from '../styles/home';

import { Header } from '../components/Header';
import { FiPlus, FiSearch } from 'react-icons/fi';
import Card from '../components/Card';
import { GetServerSideProps } from 'next';
import api from '../services/api';
import { useEffect, useMemo, useState } from 'react';
import ModalEnterprise from '../components/ModalEnterprise';
import ConfirmationModal from '../components/ConfirmationModal';

export interface Enterprise {
  id: string;
  name: string;
  status: string;
  purpose: string;
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
  const [search, setSearch] = useState('');
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
              address_label: `${element.address.street}, ${element.address.number} - ${element.address.city}, ${element.address.state}`,
            };
          } else {
            return element;
          }
        });

        setEnterprises(newEnterprises);
      } else {
        let newEnterprise = {
          ...enterprise,
          address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.city}, ${enterprise.address.state}`,
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

  const enterprisesListFiltered = useMemo(() => {
    const lowerSearch = search.toLocaleLowerCase();
    return enterprisesList.filter((enteprise) => {
      const ok =
        enteprise.name.toLocaleLowerCase().includes(lowerSearch) ||
        enteprise.status.toLocaleLowerCase().includes(lowerSearch) ||
        enteprise.purpose.toLocaleLowerCase().includes(lowerSearch) ||
        enteprise.address.state.toLocaleLowerCase().includes(lowerSearch) ||
        enteprise.address.city.toLocaleLowerCase().includes(lowerSearch);
      if (ok) {
        return enteprise;
      }
    });
  }, [search, enterprisesList]);

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
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </label>
        </div>

        <div className="list">
          {enterprisesListFiltered.length > 0 ? (
            enterprisesListFiltered.reverse().map((element) => (
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
            <h3>Nenhuma empresa encontrada!</h3>
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

        <button onClick={() => submitOpenModal()} className="buttonAddMobile">
          <FiPlus size={30} strokeWidth={3} stroke="#fff" />
        </button>
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
      address_label: `${enterprise.address.street}, ${enterprise.address.number} - ${enterprise.address.city}, ${enterprise.address.state}`,
    };
  });

  return {
    props: {
      enterprises,
    },
  };
};
