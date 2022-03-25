import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
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

        color: ${(props) => props.theme.colors.textcolorPrimary};
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
    display: none;
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

  .buttonSwitchTheme {
    position: absolute;
    bottom: 5px;
    left: 5px;

    button {
      border: none;
      outline: none;
      background: transparent;
      width: 80px;

      color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      line-height: 1.1rem;
      color: ${(props) => props.theme.colors.textcolorPrimary};
      text-decoration: underline;

      :hover {
        color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};
      }
    }
  }

  .buttonLoadingMore {
    margin-top: 4rem;
    display: flex;
    justify-content: center;
  }

  @media (max-width: 700px) {
    .buttonAddMobile {
      display: block;
    }

    .search {
      padding: 0 3rem;
    }

    .list {
      padding: 0 3rem;
    }
  }
`;
