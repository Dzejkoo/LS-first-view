import React from 'react';
import { Notification, NotificationTime } from './UserNotifications.styles';
import { ButtonMessage } from '../../../shared/ButtonMessage.styles';
import { WrapperMessage } from '../../../shared/MessageWrapper.styles';
import { HeaderMessage } from '../../../shared/HeaderMessage.styles';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/images/icon/notification-icon.svg';

export const UserNotifications = () => {
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
      <ButtonMessage>
        <button>Zobacz wszystkie</button>
        <Arrow />
      </ButtonMessage>
    </WrapperMessage>
  );
};
