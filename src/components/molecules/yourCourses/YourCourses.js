import React from 'react';
import { YourCoursesStyled, Title, CoursesNavigation, NavigationItem } from './YourCourses.styles';
import { ReactComponent as AddIcon } from '../../../assets/images/icon/add-icon.svg';

export const YourCourses = () => {
  return (
    <YourCoursesStyled>
      <Title>
        <h3>Twoje kursy</h3>
        <button>
          <AddIcon />
          Dodaj Kurs
        </button>
      </Title>
      <CoursesNavigation>
        <NavigationItem isActive>
          <span>Aktywne</span>
          <span>12</span>
        </NavigationItem>
        <NavigationItem>
          <span>Aktywne</span>
          <span>7</span>
        </NavigationItem>
        <NavigationItem>
          <span>Wersje robocze</span>
          <span>4</span>
        </NavigationItem>
      </CoursesNavigation>
    </YourCoursesStyled>
  );
};
