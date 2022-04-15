import React from 'react';
import { NavListStyled } from './NavList.styles';
import styled from 'styled-components';
import { ReactComponent as Dashboard } from '../../../assets/images/icon/navListIcon/dashboard.svg';
import { ReactComponent as Courses } from '../../../assets/images/icon/navListIcon/curses.svg';
import { ReactComponent as Product } from '../../../assets/images/icon/navListIcon/product.svg';
import { ReactComponent as Users } from '../../../assets/images/icon/navListIcon/users.svg';
import { ReactComponent as Marketing } from '../../../assets/images/icon/navListIcon/marketing.svg';
import { ReactComponent as Sales } from '../../../assets/images/icon/navListIcon/sales.svg';
import { ReactComponent as Repository } from '../../../assets/images/icon/navListIcon/repository.svg';
import { NavLink } from 'react-router-dom';

export const NavList = () => {
  return (
    <NavListStyled>
      <StyledLink to="/dashboard">
        <Dashboard />
        <span>Dashboard</span>
      </StyledLink>
      <StyledLink to="/">
        <Courses />
        <span>Kursy</span>
      </StyledLink>
      <StyledLink to="/product">
        <Product />
        <span>Produkty</span>
      </StyledLink>
      <StyledLink to="/users">
        <Users />
        <span>Uytkowncy</span>
      </StyledLink>
      <StyledLink to="/marketing">
        <Marketing />
        <span>Marketing</span>
      </StyledLink>
      <StyledLink to="/sales">
        <Sales />
        <span>Sprzedaż</span>
      </StyledLink>
      <StyledLink to="/repository">
        <Repository />
        <span>Repozytorium</span>
      </StyledLink>
    </NavListStyled>
  );
};

const StyledLink = styled(NavLink).attrs()`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.grayMedium};
  font-size: ${({ theme }) => theme.fontSize.m};
  padding: ${({ isLast }) => (isLast ? '20px 20px 15px 40px' : '20px 20px 20px 40px')};
  display: flex;
  text-decoration: none;
  font-weight: 600;
  svg {
    fill: ${({ theme }) => theme.colors.grayMedium};
  }

  &.active {
    border-right: 5px solid ${({ theme }) => theme.colors.turkis};
    color: ${({ theme }) => theme.colors.turkis};

    svg {
      fill: ${({ theme }) => theme.colors.turkis};
    }
  }
  span {
    padding-left: 35px;
  }
`;
