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
    align-items: center;
    padding: 1.5rem 4rem 2.5rem 4rem;
    border-radius: 0.75rem;

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 1.3rem;
      font-weight: 700;
      line-height: 1.1rem;
      color: ${(props) => props.theme.colors.textcolorPrimary};

      margin-bottom: 3rem;
    }

    svg {
      cursor: pointer;
      position: absolute;
      right: 1rem;
    }

    form {
      display: flex;
      flex-direction: column;
      width: 20rem;

      select {
        background: transparent;
        margin-bottom: 2rem;
        cursor: pointer;
      }

      .groupInput {
        margin-bottom: 2rem;

        input {
          ::placeholder {
            color: ${(props) => props.theme.colors.textcolorPrimary};
          }
          :focus {
            ::placeholder {
              color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
            }
          }
        }
      }

      select,
      input {
        width: 100%;
        border: none;
        outline: none;
        padding-bottom: 0.5rem;

        border-bottom: 1px solid
          ${(props) => props.theme.colors.outlineGrayDark};

        :focus {
          border-color: ${(props) =>
            props.theme.colors.brandcolorPrimaryDefault};
        }
      }

      .endereco {
        margin-top: -1.5rem;
        margin-bottom: 1.5rem;
        p {
          font-family: 'Inter', sans-serif;
          font-size: 0.8rem;
          line-height: 1.1rem;
        }
      }

      .error {
        font-size: 0.75rem;
        margin: 0.25rem 0;
        color: red;
      }
    }
  }
`;
