import styled from 'styled-components';

export const CoursePropertyWrapper = styled.div`
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
