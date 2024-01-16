import { css } from "@emotion/css";


export const sSetting = css`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const sSettingHeading = css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 7px;
`

export const sSettingForm = css`
    width: 50%;
    
    display: flex;
    gap: 12px;
    flex-direction: column;
    padding-top: 30px;
`

export const sSettingLogo = css`
    display: flex;
    justify-content: center;
    height: 170px;
    border-bottom: 1px solid #ccc;
    margin-bottom: 10px;
`

export const sSettingDodo = css`
  position: absolute;
  bottom: 0;
  right: 0;
  height: 35vh;
  z-index: -1;
`

export const sSettingButton = css`
  padding-top: 12px;
`;