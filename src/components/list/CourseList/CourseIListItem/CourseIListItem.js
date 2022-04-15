import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Dots } from '../../../../assets/images/icon/dots.svg';
import { CourseInfoWrapper, CourseWrapper, CourseSettingWrapper, SwithLabel, SwithInput, CourseSettings } from './CourseIListtem.styles';

export const ListCourseItem = ({ title, photo }) => {
  return (
    <CourseWrapper>
      <img src={photo} alt="html logo" />
      <CourseInfoWrapper>
        <h3>{title}</h3>
        <CourseSettingWrapper>
          <span>Publiczny</span>
          <SwithLabel>
            <SwithInput type="checkbox" />
            <div></div>
          </SwithLabel>
          <CourseSettings>
            <Dots />
          </CourseSettings>
        </CourseSettingWrapper>
        <CourseProperty>
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
        </CourseProperty>
      </CourseInfoWrapper>
    </CourseWrapper>
  );
};

export const CourseProperty = styled.div`
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(176, 190, 197, 0.3);
  justify-content: space-between;
  align-items: flex-end;
`;

export const CourseInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding-bottom: 5px;
  }
  span:last-child {
    font-size: ${({ theme }) => theme.fontSize.s};
    opacity: 0.5;
  }
`;
