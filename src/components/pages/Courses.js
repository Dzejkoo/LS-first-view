import React from 'react';
import { PageWrapper } from '../../shared/PageWrapper.styles';
import { Header } from '../header/MainHeader/MainHeader';
import { CoursesHeader } from '../header/CoursesHeader/CoursesHeader';
import { ListCourses } from '../list/CourseList/CoursesList';

export const Courses = () => {
  return (
    <PageWrapper>
      <Header />
      <CoursesHeader />
      <ListCourses />
    </PageWrapper>
  );
};
