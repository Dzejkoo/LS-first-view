import React from 'react';
import styled from 'styled-components';
import { ListCourseItem } from './CourseIListItem/CourseIListItem';
import photos from '../../../assets/images/photo/inedx';

export const ListCourses = () => {
  return (
    <ListCoursesWrapper>
      <ListCourseItem title={data.title1} photo={photos.htmlLogo} />
      <ListCourseItem title={data.title2} photo={photos.jsLogo} />
      <ListCourseItem title={data.title3} photo={photos.cssLogo} />
      <ListCourseItem title={data.title1} photo={photos.htmlLogo} />
    </ListCoursesWrapper>
  );
};

const data = {
  title1: 'Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta',

  title2: 'Kurs JavaScript w praktyce',

  title3: 'Kurs CSS Grid'
};

const ListCoursesWrapper = styled.div`
  overflow-y: scroll;
  flex-grow: 2;
  padding-bottom: 60px;
`;
