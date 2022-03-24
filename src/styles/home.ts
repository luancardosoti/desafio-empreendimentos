import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.colors.bgGray};

  .search {
    padding: 0 8rem;
    margin: 2rem 0;

    .groupInput {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 0.5rem 0;
      border-bottom: 1px solid ${(props) => props.theme.colors.outlineGrayDark};

      svg {
        color: ${(props) => props.theme.colors.textcolorPrimary};
      }

      input {
        margin-left: 1rem;
        width: 100%;
        border: none;
        outline: none;
        background: transparent;

        ::placeholder {
          color: ${(props) => props.theme.colors.textcolorPrimary};
        }
      }

      :focus-within {
        border-bottom: 1px solid
          ${(props) => props.theme.colors.brandcolorPrimaryDefault};

        svg {
          color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
        }
      }
    }
  }
`;
