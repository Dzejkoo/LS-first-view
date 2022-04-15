import React from 'react';
import { ReactComponent as MessageIcon } from '../../../assets/images/icon/message-icon.svg';
import { ReactComponent as NotificationIcon } from '../../../assets/images/icon/notification-icon.svg';
import { HeaderCoursesStyled, Icons, IconsWrapperMessage, IconsWrapperNotification } from './MainHeader.styles';

export const Header = () => {
  return (
    <HeaderCoursesStyled>
      <h2>Kursy</h2>
      <Icons>
        <IconsWrapperMessage>
          <span>2</span>
          <MessageIcon />
        </IconsWrapperMessage>
        <IconsWrapperNotification>
          <span>6</span>
          <NotificationIcon />
        </IconsWrapperNotification>
      </Icons>
    </HeaderCoursesStyled>
  );
};
