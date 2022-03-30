import React from 'react';
import { ViewWrapper } from '../../atoms/viewWrapper/ViewWrapper.styles';
import { HeaderCourses } from '../../molecules/headerCourses/HeaderCourses';
import { YourCourses } from '../../molecules/yourCourses/YourCourses';
import { ListCourses } from '../../molecules/listCourses/ListCourses';

export const Courses = () => {
  return (
    <ViewWrapper>
      <HeaderCourses />
      <YourCourses />
      <ListCourses />
    </ViewWrapper>
  );
};
