import { theme } from '@/styles';
import { css } from '@emotion/css';

export const sDashboardLoading = css`
  width: 100%;

  margin-top: 40px;

  display: flex;
  justify-content: center;
`;

export const sDashboardHeader = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const sDashboardButtonLock = css`
  background-color: transparent;
`;

export const sDashboardContent = css`
  width: 100%;

  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const sDashboardCardSection = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 80px;
  justify-content: space-between;

  > section {
    width: 100%;
  }
`;

export const sDashboardNoLogActivity = css`
  width: 100%;

  margin-top: 40px;
  text-align: center;
`;

export const sDashboardTable = css`
  box-shadow: 0px 4px 20px 0px #0000000d;
  border-radius: 10px;
  padding: 15px;
`;

export const sDashboardChart = css`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 1px 12px 0px #4776390d;
  flex: 1;
`;

export const sDashboardChartHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
`;

export const sDashboardPie = css`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  background-color: #4e773f;
  height: 500px;
  padding: 20px;
  width: 300px;
  border-radius: 8px;
  text-align: center;
`;

export const sDashboardViz = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
`;

export const sTableLeft = css`
  text-align: left !important;
   max-width: 43ch;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const sTableLink = css`
  cursor: pointer;

  text-decoration: underline;
`;

export const sDatePicker = css`
  background-color: #ffffff1f;
  border-radius: 5px;
`;

export const sDatePickerPieChart = css`
  background-color: #ffffff1f;
  border-radius: 5px;

  input, svg, label {
    color: #fff;
  }
`;

export const sSelect = css`
  &:hover {
    background-color: ${theme.color.primary.lightGreen};
  }
`;


export const sActionButton = css`
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
  :active {
    opacity: 0.6;
  }
`;


export const sLogDeleteButton = css`
  width: 106px;
  height: 45px;
  padding: 12px 10px 12px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const sLogModalButton = css`
  width: 100%;

  margin-top: 20px;

  display: flex;
  justify-content: center;
  gap: 10px;
`;
