import React from 'react';
import { ReactComponent as Dots } from '../../../assets/images/icon/dots.svg';
import { SettingCourseWrapper, SwithLabel, SwithInput, CourseSettings } from './SettingCourse.styles';

export const SettingCourse = () => {
  return (
    <SettingCourseWrapper>
      <span>Publiczny</span>
      <SwithLabel>
        <SwithInput type="checkbox" />
        <div></div>
      </SwithLabel>
      <CourseSettings>
        <Dots />
      </CourseSettings>
    </SettingCourseWrapper>
  );
};
