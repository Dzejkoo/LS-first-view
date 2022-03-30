import React from 'react';
import styled from 'styled-components';
import { HeaderMessage, Time, WrapperMessage, SeeAll } from '../message/Message.styles';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/images/icon/notification-icon.svg';

const Notification = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  padding-top: 10px;
  justify-content: flex-start;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  span:first-child {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 80%;
  }
`;

const NotificationTime = styled(Time)`
  margin: 0 0 0 10px;
  &::after {
    display: ${({ isLast }) => (isLast ? 'none' : 'block')};
    right: -15px;
  }
`;

export const Notifications = () => {
  return (
    <WrapperMessage>
      <HeaderMessage>
        <NotificationIcon />
        <h2>Ostatnie wiadomości</h2>
        <span>2</span>
      </HeaderMessage>
      <Notification>
        <span>Paweł Nowak oznaczył Cię w komentarzu</span>
        <NotificationTime>11:25</NotificationTime>
      </Notification>
      <Notification>
        <span>3 osoby ukończyły kurs „Kurs tworzenia stron WWW…</span>
        <NotificationTime>8:14</NotificationTime>
      </Notification>
      <Notification>
        <span>2 nowe prace domowe „Kurs tworzenia stron WWW…</span>
        <NotificationTime isLast>pn</NotificationTime>
      </Notification>
      <SeeAll>
        <button>Zobacz wszystkie</button>
        <Arrow />
      </SeeAll>
    </WrapperMessage>
  );
};
