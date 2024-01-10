import { css } from '@emotion/css';

export const sSelectChildWrapper = css`
  position: relative;
`;

export const sSelectChildBoxContainer = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  width: 264px;
  padding: 8px 14px;
  justify-content: space-between;
  gap: 8px;
  overflow: hidden;

  border-radius: 10px;
  border: 1px solid #4e773f;
  cursor: pointer;

  :hover {
    background-color: #4e773f1a;
  }

  :active {
    opacity: 0.85;
  }
`;

export const sSelectChildPreviewBox = css`
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  min-width: 0;
`;

export const sSelectChildIcon = css`
  padding: 4px;
`;

export const sSelectChildPreview = css`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
  align-items: flex-start;
`;

export const sSelectChildPreviewLabel = css`
  font-family: Segoe UI;
  font-size: 14px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const sSelectChildPreviewChildName = css`
  font-family: Segoe UI;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`;

export const sSelectChildChevron = css`
  min-width: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const sChildListContainer = css`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 19px;
  z-index: 999;

  display: flex;
  width: 420px;
  max-height: 310px;
  overflow: scroll;
  padding: 25px;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;

  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);

  > * {
    width: 100%;
  }
`;

export const sChildSearchWrapper = css`
  position: relative;

  input[type='text'] {
    width: 100%;
    padding: 10px 15px 10px 48px;
    border-radius: 5px;
    border: 1px solid var(--light-grey, #b3b3b3);

    font-family: Segoe UI;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    ::placeholder {
      color: var(--light-grey, #b3b3b3);
    }
  }
`;

export const sChildrenListWrapper = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 15px;

  div {
    width: 100%;
    border-radius: 5px;
    padding: 6px 15px;
    cursor: pointer;
    :hover {
      background: #4e773f1a;
    }
    :active {
      opacity: 0.85;
    }
  }

  div.active {
    background: #4e773f;
    color: #fff;
  }
`;

export const sChildSearchIcon = css`
  position: absolute;
  left: 15px;
  top: 10px;
`;
