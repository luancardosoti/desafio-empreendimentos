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

interface ConfirmationModalProps {
  functionOnConfirmation: () => void;
  functionNotConfirm: () => void;
  title: string;
  text: string;
}

export default function ConfirmationModal({
  functionOnConfirmation,
  functionNotConfirm,
  title,
  text,
}: ConfirmationModalProps) {
  return (
    <Container>
      <div className="content">
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={{ __html: text }} />

        <div className="buttons">
          <button onClick={functionNotConfirm}>Não</button>
          <button onClick={functionOnConfirmation}>Sim</button>
        </div>
      </div>
    </Container>
  );
}
