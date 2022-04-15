import React from 'react';
import styled from 'styled-components';
import { LeftNavigation } from '../components/navigations/LeftNavigation/LeftNavigation';
import { UserProfile } from '../components/user/UserProfile/UserProfile';

const Wrapper = styled.div`
  display: flex;
`;

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <LeftNavigation />
      {children}
      <UserProfile />
    </Wrapper>
  );
};
