import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: ${(props) => props.theme.colors.bgGray};

  padding-top: 8rem;
  padding-bottom: 5rem;

  .search {
    padding: 0 8rem;
    margin-bottom: 3rem;

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

  .list {
    padding-left: 8.5rem;
    padding-right: 7.5rem;

    h3 {
      font-family: 'Inter', sans-serif;
      font-size: 1.4rem;
      line-height: 1.4rem;
      font-weight: 700;
      color: ${(props) => props.theme.colors.textcolorPrimary};

      margin-right: 1rem;
    }
  }

  .buttonAddMobile {
    position: fixed;
    bottom: 2rem;
    right: 2rem;

    width: 55px;
    height: 55px;

    border: none;
    border-radius: 55px;
    background: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
    padding: 0.5rem;
  }
`;
