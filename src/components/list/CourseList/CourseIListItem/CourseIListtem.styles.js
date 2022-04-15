import styled from 'styled-components';

export const CourseWrapper = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  padding: 24px;
  width: 758px;
  height: 158px;
  margin: 20px auto;
`;

export const CourseInfoWrapper = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  h3 {
    width: 70%;
    color: ${({ theme }) => theme.colors.grayDark};
    margin: 0;
  }
`;

export const SwithLabel = styled.label`
  display: inline-block;
  font-size: 20px;
  height: 17px;
  width: 28px;
  background: ${({ theme }) => theme.colors.turkisLight};
  border-radius: 10px;
  div {
    height: 17px;
    width: 17px;
    border-radius: 1em;
    background: ${({ theme }) => theme.colors.turkis};
    box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
    transition: all 300ms;
  }
  input:checked + div {
    transform: translate3d(100%, 0, 0);
  }
`;

export const SwithInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

export const CourseSettingWrapper = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-start;
  margin-left: auto;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    opacity: 0.4;
    margin-right: 5px;
    font-weight: 300;
  }
`;

export const CourseSettings = styled.a`
  cursor: pointer;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.colors.grayMedium};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 20px;
`;
