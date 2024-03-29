import { MouseEvent } from 'react';
import { FiPlus } from 'react-icons/fi';
import ButtonBranding from '../ButtonBranding';
import { Container } from './styles';

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <Container>
      <h1>Empreendimentos</h1>
      <ButtonBranding onClick={() => openModal()}>
        Adicionar
        <FiPlus size={16} strokeWidth={3} stroke="#fff" />
      </ButtonBranding>
    </Container>
  );
}
