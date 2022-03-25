import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background: ${(props) => props.theme.colors.bgWhite};

  padding: 1.8rem 8rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: 'Montserrat', sans-serif;
    line-height: 1.6rem;
    font-size: 1.6rem;
    font-weight: 700;
    color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
  }

  button {
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

    svg {
      margin-left: 0.5rem;
    }
  }
`;
