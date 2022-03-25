import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;

  .content {
    position: relative;
    background: ${(props) => props.theme.colors.bgWhite};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem 2rem;
    border-radius: 1rem;

    width: 550px;

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.1rem;
      color: ${(props) => props.theme.colors.textcolorPrimary};

      margin-bottom: 1.5rem;
    }

    p {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.colors.textcolorSecondary};
    }

    .buttons {
      width: 100%;
      margin-top: 1.5rem;
      display: flex;
      justify-content: flex-end;

      button {
        padding: 0.5rem 1rem;

        background: transparent;
        border-radius: 0.2rem;
        border: 1px solid ${(props) => props.theme.colors.textcolorSecondary};
        color: ${(props) => props.theme.colors.textcolorSecondary};

        transition: all ease 0.2s;

        + button {
          margin-left: 1rem;
          border: none;
          background: ${(props) =>
            props.theme.colors.brandcolorPrimaryDefault} !important;
          color: ${(props) => props.theme.colors.bgWhite} !important;

          &:hover {
            filter: brightness(0.8);
          }
        }
      }
    }
  }
`;
