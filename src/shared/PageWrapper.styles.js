import styled from 'styled-components';

export const PageWrapper = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.colors.creameWhite};
`;
