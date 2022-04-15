import React from 'react';
import { ReactComponent as MessageIcon } from '../../../assets/images/icon/message-icon.svg';
import photos from '../../../assets/images/photo/inedx';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { Chat, UserMessageInfo, DeliveredName, Name, Time, DeliveredMessage } from './UserMessage.styles';
import { HeaderMessage } from '../../../shared/HeaderMessage.styles';
import { WrapperMessage } from '../../../shared/MessageWrapper.styles';
import { ButtonMessage } from '../../../shared/ButtonMessage.styles';

export const UserMessage = () => {
  return (
    <WrapperMessage>
      <HeaderMessage>
        <MessageIcon />
        <h2>Ostatnie wiadomości</h2>
        <span>6</span>
      </HeaderMessage>
      <Chat>
        <img src={photos.userSecound} alt="user face" />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Paweł Nowak</Name>
            <Time>11:25</Time>
          </DeliveredName>
          <DeliveredMessage>Dzień dobry, miałem wys...</DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <Chat>
        <img src={photos.userThird} alt="user face" />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Joanna Zalewska</Name>
            <Time>8:14</Time>
          </DeliveredName>
          <DeliveredMessage>Witam, piszę w takiej spra... </DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <Chat>
        <img src={photos.userThird} alt="user face" />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Joanna Zalewska</Name>
            <Time isLast>wt</Time>
          </DeliveredName>
          <DeliveredMessage>Witam, piszę w takiej spra... </DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <ButtonMessage>
        <button>Zobacz wszystkie</button>
        <Arrow />
      </ButtonMessage>
    </WrapperMessage>
  );
};
