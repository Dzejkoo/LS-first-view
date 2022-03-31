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
        <span>Wyloguj</span>
      </NavItem>
      <CompanyInfo>
        <img src={photos.companyLogo} alt="Company Logo" />
        <span>Nazwa firmy</span>
      </CompanyInfo>
    </Wrapper>
  );
};
