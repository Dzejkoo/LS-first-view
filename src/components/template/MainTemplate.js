import React from 'react';
import styled from 'styled-components';
import { Navigation } from '../organisms/navigation/Navigation';
import { UserProfile } from '../organisms/userProfile/UserProfile';

const Wrapper = styled.div`
  display: flex;
`;

export const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
      <UserProfile />
    </Wrapper>
  );
};
