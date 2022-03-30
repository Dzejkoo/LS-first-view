import styled from 'styled-components';

export const CoursePropertyWrapper = styled.div`
  width: 100%;
  display: flex;
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
