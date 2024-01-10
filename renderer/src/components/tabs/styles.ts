import { css } from "@emotion/css";

export const sTabContainer = css`
  display: flex;
  border-bottom: 1px solid #e1e3e5;
  item-align: center;
`;

export const sTabButton = css`
  background: #ffffff;
  border: 3px solid #ffffff;
  padding: 16px;
  color: #9e9e9e;
  text-align: center;
  font-feature-settings: 'clig' off, 'liga' off;
  font-family: Nunito;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  /* add on active */
  :active {
    opacity: 0.7;
  }
`;

export const sTabButtonActive = css`
  color: #ffbc57;
  font-size: 16px;
  font-weight: 700;
  border-bottom: 3px solid #ffbc57;
`;