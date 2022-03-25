import styled from 'styled-components';

export const ButtonBradingContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
  color: ${(props) => props.theme.colors.bgWhite};
  border-radius: 2rem;
  padding: 0.5rem 2rem;
  border: none;

  font-family: 'Inter';
  font-weight: 700;
  font-size: 1rem;
  color: #fff;

  svg {
    margin-left: 0.5rem;
  }
`;
