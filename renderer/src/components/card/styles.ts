import { css } from '@emotion/css';
import { theme } from '@/styles'


export const sCard = css`
display: flex;
flex-direction: column;
justify-content: space-between;
  width: 280px;
  height: 104px;
  background-color: #ffffff;
  box-shadow: 10px 3px 10px 3px #4776390d;
  border-radius: 8px;
  padding: 10px 15px 10px 15px;
  z-index: -1;
`;

export const sCardContent = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
    align-items: center;
`;

export const sCardContentAll = css`
    color: ${theme.color.primary.lightGreen};
    font-size: ${theme.font.size[36]};
`;

export const sCardContentPositive = css`
  color: ${theme.color.secondary.blue};
  font-size: ${theme.font.size[36]};
`;

export const sCardContentNegative = css`
  color: ${theme.color.secondary.red};
  font-size: ${theme.font.size[36]};
`;

export const sCardIcon = css`
    display: flex;
    justify-content: center;
    align-items: center;  
    width: 45px;
    height: 45px;
    border-radius: 5px;
    padding: 2px;
    background-color: #91A6591F;
`;