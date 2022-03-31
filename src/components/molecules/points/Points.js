import React from 'react';
import { PointsWrapper, YourPoints, CaughtPoints, InfoPoints } from './Points.styles';
import { ReactComponent as Award } from '../../../assets/images/icon/award.svg';

export const Points = () => {
  return (
    <PointsWrapper>
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
    </PointsWrapper>
  );
};
