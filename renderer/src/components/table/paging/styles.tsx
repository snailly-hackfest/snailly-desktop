import { css } from '@emotion/css';

export const sPagingWrapper = css`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 18px;
  font-weight: 600;

  > button {
    display: flex;
    width: 35px;
    height: 35px;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 4px;
    border: 1px solid #4e773f;
    color: #4e773f;
    background: #fff;
    cursor: pointer;

    :hover {
      background: #4e773f;
      color: #fff;
    }

    :active {
      opacity: 0.8;
    }

    :disabled {
      border: 1px solid #9c9c9c;
      color: #9c9c9c;
    }
  }

  > div {
    display: flex;
    gap: 4px;
  }

  > div > button {
    display: flex;
    width: 35px;
    height: 35px;
    padding: 8px 10px;
    justify-content: center;
    align-items: center;
    gap: 15px;
    border-radius: 4px;
    border: 1px solid #9c9c9c;
    color: #9c9c9c;
    background: #fff;
    cursor: pointer;

    :hover {
      background: #4e773f;
      color: #fff !important;
    }

    :active {
      opacity: 0.8;
    }
  }

  > div > button.active {
    color: #4e773f;
    border: 1px solid #4e773f;
  }
`;