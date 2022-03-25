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
      line-height: 1.25rem;
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
      padding: 0.5rem 1.5rem;
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

  @media (max-width: 700px) {
    flex-direction: column;
    .content {
      .title {
        justify-content: space-between;
      }

      p {
        margin-top: 0.5rem;
      }
    }

    .tags {
      margin: 0;
      margin-top: 1.5rem;
      justify-content: space-evenly;

      .tag {
        margin: 0.25rem 0;
      }
    }
  }
`;
