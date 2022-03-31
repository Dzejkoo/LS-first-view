import React from 'react';
import { SettingCourse } from '../../atoms/settingCourse/SettingCourse';
import { CourseProperty } from '../../atoms/courseProperty/CourseProperty';
import { CourseInfoWrapper, CourseWrapper } from './Course.styles';

export const Course = ({ title, photo }) => {
  return (
    <CourseWrapper>
      <img src={photo} alt="html logo" />
      <CourseInfoWrapper>
        <h3>{title}</h3>
        <SettingCourse />
        <CourseProperty />
      </CourseInfoWrapper>
    </CourseWrapper>
  );
};
