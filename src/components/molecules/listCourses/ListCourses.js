import React from 'react';
import styled from 'styled-components';
import { Course } from '../course/Course';
import photos from '../../../assets/images/photo/inedx';

const data = {
  title1: 'Kurs Tworzenia Stron WWW w HTML i CSS od Podstaw do Eksperta',

  title2: 'Kurs JavaScript w praktyce',

  title3: 'Kurs CSS Grid'
};

const ListCoursesWrapper = styled.div`
  overflow-y: scroll;
  flex-grow: 2;
  padding-bottom: 60px;
  /* overflow: hidden; */
`;

export const ListCourses = () => {
  return (
    <ListCoursesWrapper>
      <Course title={data.title1} photo={photos.htmlLogo} />
      <Course title={data.title2} photo={photos.jsLogo} />
      <Course title={data.title3} photo={photos.cssLogo} />
      <Course title={data.title1} photo={photos.htmlLogo} />
    </ListCoursesWrapper>
  );
};
