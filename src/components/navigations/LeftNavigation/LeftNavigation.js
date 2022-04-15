import React from 'react';
import styled from 'styled-components';
import { NavList } from '../../list/NavList/NavList';
import photos from '../../../assets/images/photo/inedx';
import { NavItem } from '../../list/NavList/NavList.styles';
import { ReactComponent as LogOut } from '../../../assets/images/icon/navListIcon/logOut.svg';

export const LeftNavigation = () => {
  return (
    <Wrapper>
      <LogoStyled>
        <img src={photos.logoLearningSpace} alt="Logo Learning Space" />
      </LogoStyled>
      <NavList />
      <ControlPanel>
        <NavItem isLast>
          <LogOut />
          <button>Wyloguj</button>
        </NavItem>
        <CompanyInfo>
          <img src={photos.companyLogo} alt="Company Logo" />
          <button>Nazwa firmy</button>
        </CompanyInfo>
      </ControlPanel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grayDark};
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const LogoStyled = styled.div`
  box-sizing: border-box;
  padding: 24px 0px 24px 24px;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
`;

export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.grayMedium};
    cursor: pointer;
  }
  img {
    padding: 16px 16px 16px 23px;
  }
`;

const ControlPanel = styled.div`
  margin-top: auto;
`;
