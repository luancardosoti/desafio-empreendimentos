import { MouseEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <h1>Empreendimentos</h1>
      <button onClick={() => openModal()}>
        Adicionar
        <FiPlus size={16} strokeWidth={3} stroke="#fff" />
      </button>
    </Container>
  );
}
