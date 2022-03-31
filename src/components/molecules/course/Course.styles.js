import styled from 'styled-components';

export const CourseWrapper = styled.div`
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: row;
  padding: 24px;
  width: 758px;
  height: 158px;
  margin: 20px auto;
`;

export const CourseInfoWrapper = styled.div`
  padding: 0 0 0 20px;
  display: flex;
  flex-wrap: wrap;
  h3 {
    width: 70%;
    color: ${({ theme }) => theme.colors.grayDark};
    margin: 0;
  }
`;
