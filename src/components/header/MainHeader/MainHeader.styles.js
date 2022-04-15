import styled from 'styled-components';

export const HeaderCoursesStyled = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSize.xxl};
    line-height: 100%;
  }
`;
export const Icons = styled.div`
  display: flex;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.white};
`;

export const IconsWrapperMessage = styled.a`
  position: relative;
  cursor: pointer;
  margin-right: 30px;
  span {
    font-size: 10px;
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-color: ${({ theme }) => theme.colors.violetRed};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
export const IconsWrapperNotification = styled.a`
  position: relative;
  cursor: pointer;
  span {
    font-size: 10px;
    display: block;
    position: absolute;
    top: 0;
    left: 100%;
    transform: translate(-50%, -50%);
    width: 13px;
    height: 13px;
    background-color: ${({ theme }) => theme.colors.violetRed};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;
