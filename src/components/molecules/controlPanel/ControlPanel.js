import React from 'react';
import { Wrapper, CompanyInfo } from './ControlPanel.styles';
import { NavItem } from '../navList/NavList.styles';
import { ReactComponent as LogOut } from '../../../assets/images/icon/navListIcon/logOut.svg';
import photos from '../../../assets/images/photo/inedx';

export const ControlPanel = () => {
  return (
    <Wrapper>
      <NavItem isLast>
        <LogOut />
        <button>Wyloguj</button>
      </NavItem>
      <CompanyInfo>
        <img src={photos.companyLogo} alt="Company Logo" />
        <button>Nazwa firmy</button>
      </CompanyInfo>
    </Wrapper>
  );
};
