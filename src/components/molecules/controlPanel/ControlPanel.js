import React from 'react';
import styled from 'styled-components';
import { NavItem } from '../navList/NavList.styles';
import { ReactComponent as LogOut } from '../../../assets/images/icon/navListIcon/logOut.svg';
import photos from '../../../assets/images/photo/inedx';

const Wrapper = styled.div`
  margin-top: auto;
`;
const CompanyInfo = styled.div`
  color: ${({ theme }) => theme.colors.grayMedium};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  img {
    padding: 16px 16px 16px 23px;
  }
`;

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
