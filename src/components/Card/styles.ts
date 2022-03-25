import styled from 'styled-components';

export const Container = styled.header`
  background: ${(props) => props.theme.colors.bgWhite};
  display: flex;
  flex-wrap: wrap;
  padding: 2rem;
  margin-bottom: 2rem;

  .content {
    flex: 4;

    .title {
      display: flex;
      align-items: center;

      h3 {
        font-family: 'Inter', sans-serif;
        font-size: 1.4rem;
        line-height: 1.4rem;
        font-weight: 700;
        color: ${(props) => props.theme.colors.textcolorPrimary};

        margin-right: 1rem;
      }

      svg {
        cursor: pointer;
        color: ${(props) => props.theme.colors.brandcolorPrimaryDefault};

        + svg {
          margin-left: 0.25rem;
        }
      }
    }

    p {
      margin-top: 1rem;
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      line-height: 1rem;
      color: ${(props) => props.theme.colors.textcolorSecondary};
    }
  }

  .tags {
    margin-left: 2rem;
    flex: 2;
    display: flex;
    justify-content: flex-end;
    gap: 1rem;
    flex-wrap: wrap;

    .tag span {
      padding: 0.25rem 1.5rem;
      border-radius: 1rem;
      border: 1px solid ${(props) => props.theme.colors.brandcolorPrimaryLight};

      font-family: 'Inter', sans-serif;
      font-size: 0.8rem;
      line-height: 12px;
      white-space: nowrap;

      + span {
        margin-left: 1rem;
      }
    }
  }

  @media (max-width: 825px) {
    .tags {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;

      .tag + span {
        margin: 0;
        margin-top: 1rem;
      }
    }

    .contents {
      h3 {
        margin: 0;
      }
    }
  }

  @media (max-width: 540px) {
    .tags {
      margin: 0;
    }
  }
`;
