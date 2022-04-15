import React from 'react';
import { CoursesHeaderStyled, Title } from './CoursesHeader.styles';
import { ReactComponent as AddIcon } from '../../../assets/images/icon/add-icon.svg';
import { CoursesNavigation } from '../../navigation/CoursesNavigation/CoursesNavigation';

export const CoursesHeader = () => {
  return (
    <CoursesHeaderStyled>
      <Title>
        <h3>Twoje kursy</h3>
        <button>
          <AddIcon />
          Dodaj Kurs
        </button>
      </Title>
      <CoursesNavigation />
    </CoursesHeaderStyled>
  );
};
