import { css } from '@emotion/css';

import { theme } from '@/styles';

export const sTableWrapper = css`
  padding: 15px;
  border-radius: 10px;
`;

export const sTable = css`
  width: 100%;
  border-radius: 6px;
  border-collapse: collapse;
  padding: 100px;

  overflow: hidden;

  & > thead > tr > th {
    color: #4e773f;
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-align: left;
    padding: 13px 10px 17px 10px;
    border-bottom: 1px solid #a4a4a4;
    background: #fff;
  }

  & > tbody > tr > td {
    text-align: left;
    color: #212121;
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    padding: 22px 10px 24px 10px;
  }

`;

export const sTableChild = css`
  width: 100%;
  border-radius: 6px;
  border-collapse: collapse;
  padding: 100px;
  overflow: hidden;

  & > thead > tr > th {
    color: #4e773f;
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 150%;
    text-align: left;
    padding: 13px 10px 17px 10px;
    border-bottom: 1px solid #a4a4a4;
    background: #fff;
  }

  & > thead > tr > th:nth-child(2) {
    width: 720px;
  }

  & > tbody > tr > td {
    text-align: left;
    color: #212121;
    font-family: Segoe UI;
    font-size: 16px;
    font-style: normal;
    border-bottom: 1.5px solid #f3f9fe;
    font-weight: 400;
    line-height: 150%;
    padding: 22px 10px 24px 10px;
  }

  & > tbody > tr > td:first-child {
    border-left: 1.5px solid #f3f9fe;
  }

  & > tbody > tr > td:last-child {
    border-right: 1.5px solid #f3f9fe;
  }

  & > tbody > tr > td:nth-child(2) {
    width: 720px;
  }
`;

export const sTableOverflowHidden = css`
  max-width: 43ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const sTableDateColumn = css`
  max-width: 26ch;
  white-space: wrap;
`
