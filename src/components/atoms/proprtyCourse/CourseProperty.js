import React from 'react';
import { CoursePropertyWrapper, CourseInfo } from './CourseProperty.styles';

export const CourseProperty = () => {
  return (
    <CoursePropertyWrapper>
      <CourseInfo>
        <span>12.16.2020</span>
        <span>data utworzenia</span>
      </CourseInfo>
      <CourseInfo>
        <span>Jan Kowalski</span>
        <span>twórca</span>
      </CourseInfo>
      <CourseInfo>
        <span>5</span>
        <span>modułów</span>
      </CourseInfo>
      <CourseInfo>
        <span>28</span>
        <span>kursantów</span>
      </CourseInfo>
      <CourseInfo>
        <span>2</span>
        <span>Komentarze</span>
      </CourseInfo>
    </CoursePropertyWrapper>
  );
};
