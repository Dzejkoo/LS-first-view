import styled from 'styled-components';

export const NavListStyled = styled.ul`
  list-style-type: none;
  padding: 0;
`;
export const NavItem = styled.div`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayMedium};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: ${({ isLast }) => (isLast ? '28px 28px 15px 40px' : '28px 28px 28px 40px')};
  display: flex;
  svg {
    fill: ${({ theme }) => theme.colors.grayMedium};
  }
  span {
    padding-left: 30px;
  }
`;
