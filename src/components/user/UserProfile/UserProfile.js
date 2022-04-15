import React from 'react';
import { Wrapper, UserSettings, ArrowStyled, ServicesWrapper, Points, YourPoints, InfoPoints, CaughtPoints } from './UserProfile.styled';
import photos from '../../../assets/images/photo/inedx';

import { UserMessage } from '../UserMessage/UserMessage';
import { UserNotifications } from '../UserNotification/UserNotifications';
import { ReactComponent as Steps } from '../../../assets/images/icon/steps.svg';
import { ReactComponent as Arrow } from '../../../assets/images/icon/arrow.svg';
import { ReactComponent as Award } from '../../../assets/images/icon/award.svg';

export const UserProfile = () => {
  return (
    <Wrapper>
      <UserSettings>
        <img src={photos.userFirst} alt="User face" />
        <span>Jan Kowalski</span>
        <ArrowStyled />
      </UserSettings>
      <ServicesWrapper>
        <Steps />
        <div>
          <p>Przejdź na wyższy poziom i skorzystaj z pomocy dedykowanego Consierga.</p>
          <button>
            Sprawdź usługi <Arrow />
          </button>
        </div>
      </ServicesWrapper>
      <Points>
        <YourPoints>
          <Award />
          <div>
            <span>12 250</span>
            <span>punkty</span>
          </div>
        </YourPoints>
        <CaughtPoints>
          <span>ostatnio zdobyte</span>
          <span>
            <strong>300 pkt</strong> - dodanie kursu
          </span>
        </CaughtPoints>
        <InfoPoints>
          <p>Gratulacje! Możesz wykorzystać punkty na bezpłatne konsultacje z naszym Conciergem!</p>
        </InfoPoints>
      </Points>
      <UserMessage />
      <UserNotifications />
    </Wrapper>
  );
};
