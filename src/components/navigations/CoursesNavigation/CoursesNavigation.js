import React from 'react';
import styled from 'styled-components';

export const CoursesNavigation = () => {
  return (
    <CoursesNavigationWrapper>
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
    </CoursesNavigationWrapper>
  );
};

export const CoursesNavigationWrapper = styled.div`
  display: flex;
  padding-left: 24px;
`;
export const NavigationItem = styled.a`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.m};
  color: ${({ isActive, theme }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};
  border-bottom: ${({ isActive, theme }) => (isActive ? `2px solid ${theme.colors.turkis}` : 'none')};
  padding: 15px 25px;
  font-weight: 300;
  letter-spacing: 0.5px;
  span:last-child {
    font-weight: 600;
    margin-left: 13px;
    position: relative;
    &::after {
      position: absolute;
      content: '';
      left: -6px;
      top: 50%;
      background-color: ${({ isActive, theme }) => (isActive ? theme.colors.turkis : theme.colors.grayDark)};
      transform: translate(-50%, -50%);
      width: 2px;
      height: 2px;
      border-radius: 50%;
    }
  }
`;
