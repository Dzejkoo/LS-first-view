import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import bgc from '../../../assets/images/bgc';

export const Wrapper = styled.div`
  width: 316px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ArrowStyled = styled(Arrow)`
  fill: black;
  transform: rotate(90deg);
`;

export const UserSettings = styled.div`
  margin-left: auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  display: flex;
  align-items: center;
  padding: 20px 30px 20px 10px;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    padding: 0 15px 0 10px;
  }
`;

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
      cursor: pointer;
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

export const Points = styled.div`
  background-image: url(${bgc.bgcPink});
  background-size: cover;
  width: 252px;
  margin-left: auto;
  margin-right: 30px;
  border-radius: 10px;
  margin-top: 20px;
`;
export const YourPoints = styled.div`
  margin: 0 20px;
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  div {
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.colors.white};
    padding-left: 16px;
    span {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
    span:last-child {
      font-size: ${({ theme }) => theme.fontSize.s};
      padding-left: 3px;
    }
  }
`;
export const CaughtPoints = styled.div`
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  padding: 10px 0;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    margin-bottom: 5px;
  }
  span:last-child {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
export const InfoPoints = styled.div`
  color: ${({ theme }) => theme.colors.white};
  margin: 0 20px;
  padding: 10px 0 20px 0;
  p {
    margin: 0;
    font-weight: 300;
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
