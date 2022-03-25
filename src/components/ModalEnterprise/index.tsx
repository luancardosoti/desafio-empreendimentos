import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { mask } from 'remask';

import { Enterprise } from '../../pages';
import { Container } from './styles';

import { FiX } from 'react-icons/fi';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { ChangeEvent, useEffect, useState } from 'react';
import api from '../../services/api';
import ButtonBranding from '../ButtonBranding';

interface ModalEnterpriseProps {
  submitCloseModal: (enterprise?: Enterprise) => void;
  enterprise?: Enterprise;
}

interface DataForm {
  status: string;
  name: string;
  purpose: string;
  cep: string;
  number: string;
}

interface Address {
  district: string;
  city: string;
  street: string;
  state: string;
  cep: string;
}

interface ResponseZipCodeAPI {
  cep: string;
  localidade: string;
  logradouro: string;
  uf: string;
  bairro: string;
}

const schema = yup
  .object({
    status: yup.string().required(),
    name: yup.string().required('Digite o Nome'),
    purpose: yup.string().required(),
    cep: yup
      .string()
      .required('Digite o CEP')
      .test('validStr', 'CEP inválido', (cep) => {
        if (cep === null || cep === undefined || cep.length === 0) return false;

        var cepIsValid = /^[0-9]{5}-[0-9]{3}$/.test(cep);

        if (!cepIsValid) return false;

        return true;
      }),
    number: yup.string().required('Digite o Número'),
  })
  .required();

export default function ModalEnterprise({
  enterprise,
  submitCloseModal,
}: ModalEnterpriseProps) {
  console.log('enterprise');
  console.log(enterprise);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    setError,
    clearErrors,
  } = useForm<DataForm>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: enterprise?.name,
      cep: enterprise?.address?.cep,
      number: enterprise?.address?.number,
      purpose: enterprise?.purpose,
      status: enterprise?.status,
    },
  });
  const [zipCodeIsMasked, setZipCodeIsMasked] = useState(
    enterprise ? true : false
  );
  const [address, setAddress] = useState<Address | null>(
    enterprise ? enterprise.address : null
  );

  const onSubmit = handleSubmit((data) => {
    if (enterprise?.id) {
      let newEnterprise = {
        id: enterprise.id,
        name: data.name,
        status: data.status,
        purpose: data.purpose,
        address: {
          ...address,
          number: data.number,
        },
      };

      api
        .put(`/enterprises/${newEnterprise.id}`, newEnterprise)
        .then((response) => {
          if (response.status === 200) {
            submitCloseModal(response.data);
          }
        })
        .catch((error) => {
          alert('Houve um erro inesperado, por favor contator desenvolvedor.');
          submitCloseModal();
        });
    } else {
      let newEnterprise = {
        name: data.name,
        status: data.status,
        purpose: data.purpose,
        address: {
          ...address,
          number: data.number,
        },
      };

      api
        .post('/enterprises', newEnterprise)
        .then((response) => {
          if (response.status === 201) {
            submitCloseModal(response.data);
          }
        })
        .catch((error) => {
          alert('Houve um erro inesperado, por favor contator desenvolvedor.');
          submitCloseModal();
        });
    }
  });

  const onChangeCep = (e: ChangeEvent<HTMLInputElement>) => {
    let zip_code = e.target.value;
    setValue('cep', mask(zip_code, '99999-999'));

    var zipCodeIsValid = /^[0-9]{5}-[0-9]{3}$/.test(zip_code);
    if (zipCodeIsValid) {
      axios({
        method: 'get',
        url: `https://viacep.com.br/ws/${zip_code}/json/`,
        responseType: 'json',
      }).then((response) => {
        console.log(response.data);
        if (response.data.erro) {
          setError('cep', {
            type: 'invalid',
            message: 'Número de CEP inválido.',
          });
          return;
        }
        let address = response.data as ResponseZipCodeAPI;
        setAddress({
          cep: zip_code,
          city: address.localidade,
          district: address.bairro,
          state: address.uf,
          street: address.logradouro,
        });
        setZipCodeIsMasked(true);
      });
    } else {
      setZipCodeIsMasked(false);
      clearErrors('cep');
    }
  };

  return (
    <Container>
      <div className="content">
        <h3>{enterprise ? 'Editar' : 'Cadastrar'} empreendimento</h3>
        <FiX onClick={() => submitCloseModal()} />

        <form onSubmit={onSubmit}>
          <select {...register('status', { required: true })}>
            <option value="Breve Lançamento">Breve Lançamento</option>
            <option value="Lançamento">Lançamento</option>
            <option value="Em obras">Em obras</option>
            <option value="Pronto pra morar">Pronto pra morar</option>
          </select>

          <div className="groupInput">
            <input
              type="text"
              placeholder="Nome do empreendimento"
              name="name"
              {...register('name', { required: true })}
            />
            {errors.name! && <div className="error">{errors.name.message}</div>}
          </div>
          <select {...register('purpose', { required: true })}>
            <option value="Residencial">Residencial</option>
            <option value="Comercial">Comercial</option>
          </select>
          <div className="groupInput">
            <input
              type="text"
              placeholder="CEP"
              name="cep"
              {...register('cep', {
                required: true,
              })}
              autoComplete="false"
              onChange={onChangeCep}
            />
            {errors.cep! && <div className="error">{errors.cep.message}</div>}
          </div>
          {zipCodeIsMasked && (
            <div className="endereco">
              <p>{address.street}</p>
              <p>{address.district}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
            </div>
          )}

          <div className="groupInput">
            <input
              type="text"
              placeholder="Número"
              name="number"
              {...register('number', { required: true })}
            />
            {errors.number! && (
              <div className="error">{errors.number.message}</div>
            )}
          </div>

          <ButtonBranding type="submit">
            {enterprise ? 'Atualizar' : 'Adicionar'}
          </ButtonBranding>
        </form>
      </div>
    </Container>
  );
}
