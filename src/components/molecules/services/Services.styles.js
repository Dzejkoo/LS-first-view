import styled from 'styled-components';

import bgc from '../../../assets/images/bgc';

export const ServicesWrapper = styled.div`
  width: 252px;
  background-image: url(${bgc.bgcBlue});
  display: flex;
  justify-content: space-between;
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-left: auto;
  box-sizing: border-box;
  margin-right: 30px;
  background-size: cover;
  border-radius: 10px;
  padding: 20px;
  svg {
    box-sizing: content-box;
  }
  div {
    width: 162px;
    color: ${({ theme }) => theme.colors.white};
    font-weight: 500;
    p {
      margin: 0;
    }
    button {
      text-transform: uppercase;
      background: none;
      border: none;
      padding: 0;
      padding-top: 10px;
      font-weight: 600;
      color: ${({ theme }) => theme.colors.white};
      display: flex;
      align-items: center;
      svg {
        fill: ${({ theme }) => theme.colors.white};
        margin-left: 12px;
      }
    }
  }
`;
