import styled from 'styled-components';
import bgc from '../../../assets/images/bgc';

export const PointsWrapper = styled.div`
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
