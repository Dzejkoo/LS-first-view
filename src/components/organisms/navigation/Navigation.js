import React from 'react';
import { Logo } from '../../atoms/logo/Logo';
import styled from 'styled-components';
import { NavList } from '../../molecules/navList/NavList';
import { ControlPanel } from '../../molecules/controlPanel/ControlPanel';

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.grayDark};
  width: 260px;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <NavList />
      <ControlPanel />
    </Wrapper>
  );
};
