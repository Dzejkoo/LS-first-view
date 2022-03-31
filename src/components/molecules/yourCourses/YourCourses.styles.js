import styled from 'styled-components';

export const YourCoursesStyled = styled.div`
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
`;
export const Title = styled.div`
  display: flex;
  padding: 24px 24px 10px 24px;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 100%;
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.turkis};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    width: 156px;
    padding: 15px 0;
    border-radius: 40px;
  }
`;

export const CoursesNavigation = styled.div`
  display: flex;
  padding-left: 24px;
`;
export const NavigationItem = styled.a`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};
  border-bottom: ${({ isActive, theme }) => (isActive ? `2px solid ${theme.colors.turkis}` : 'none')};
  padding: 15px 25px;
  font-weight: 300;
  letter-spacing: 0.5px;
  span:last-child {
    font-weight: 600;
    margin-left: 13px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: -6px;
      top: 50%;
      background-color: ${({ isActive, theme }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};
      transform: translate(-50%, -50%);
      width: 2px;
      height: 2px;
      border-radius: 50%;
    }
  }
`;
