import React from 'react';
import styled from 'styled-components';
import photos from '../../../assets/images/photo/inedx';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { Services } from '../../molecules/services/Services';
import { Points } from '../../molecules/points/Points';
import { Message } from '../../molecules/message/Message';
import { Notifications } from '../../molecules/notifications/Notifications';

const Wrapper = styled.div`
  width: 316px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
`;

const ArrowStyled = styled(Arrow)`
  fill: black;
  transform: rotate(90deg);
`;

const UserSettings = styled.div`
  margin-left: auto;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 300;
  display: flex;
  align-items: center;
  padding: 20px 30px 20px 10px;
  img {
    width: 30px;
    height: 30px;
  }
  span {
    padding: 0 15px 0 10px;
  }
`;

export const UserProfile = () => {
  return (
    <Wrapper>
      <UserSettings>
        <img src={photos.userFirst} alt="User face" />
        <span>Jan Kowalski</span>
        <ArrowStyled />
      </UserSettings>
      <Services />
      <Points />
      <Message />
      <Notifications />
    </Wrapper>
  );
};
