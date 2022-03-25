import { MouseEvent, ReactNode } from 'react';
import { ButtonBradingContainer } from './styles';

interface ButtonBrandingProps {
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  type?: 'button' | 'reset' | 'submit';
  children: ReactNode[] | ReactNode;
}

export default function ButtonBranding({
  children,
  onClick,
  type,
}: ButtonBrandingProps) {
  return (
    <ButtonBradingContainer onClick={onClick} type={type}>
      {children}
    </ButtonBradingContainer>
  );
}
