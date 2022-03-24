import { MouseEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import { Container } from './styles';

interface HeaderProps {
  onClick: () => void;
}

export function Header({ onClick }: HeaderProps) {
  return (
    <Container>
      <h1>Empreendimentos</h1>
      <button onClick={onClick}>
        Adicionar
        <FiPlus size={16} strokeWidth={3} stroke="#fff" />
      </button>
    </Container>
  );
}
