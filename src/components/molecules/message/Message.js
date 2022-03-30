import React from 'react';
import { ReactComponent as MessageIcon } from '../../../assets/images/icon/message-icon.svg';
import photos from '../../../assets/images/photo/inedx';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { WrapperMessage, HeaderMessage, Chat, UserMessageInfo, DeliveredName, Name, Time, DeliveredMessage, SeeAll } from './Message.styles';

export const Message = () => {
  return (
    <WrapperMessage>
      <HeaderMessage>
        <MessageIcon />
        <h2>Ostatnie wiadomości</h2>
        <span>6</span>
      </HeaderMessage>
      <Chat>
        <img src={photos.userSecound} />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Paweł Nowak</Name>
            <Time>11:25</Time>
          </DeliveredName>
          <DeliveredMessage>Dzień dobry, miałem wys...</DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <Chat>
        <img src={photos.userThird} />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Joanna Zalewska</Name>
            <Time>8:14</Time>
          </DeliveredName>
          <DeliveredMessage>Witam, piszę w takiej spra... </DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <Chat>
        <img src={photos.userThird} />
        <UserMessageInfo>
          <DeliveredName>
            <Name>Joanna Zalewska</Name>
            <Time isLast>wt</Time>
          </DeliveredName>
          <DeliveredMessage>Witam, piszę w takiej spra... </DeliveredMessage>
        </UserMessageInfo>
      </Chat>
      <SeeAll>
        <button>Zobacz wszystkie</button>
        <Arrow />
      </SeeAll>
    </WrapperMessage>
  );
};
