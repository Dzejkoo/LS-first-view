import React from 'react';
import photos from '../../../assets/images/photo/inedx';
import styled from 'styled-components';

const LogoStyled = styled.div`
  box-sizing: border-box;
  padding: 24px 0px 24px 24px;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
`;

export const Logo = () => {
  return (
    <LogoStyled>
      <img src={photos.logoLearningSpace} alt="Logo Learning Space" />
    </LogoStyled>
  );
};
