import styled from 'styled-components';

export const WrapperMessage = styled.div`
  width: 256px;
  margin-left: auto;
  margin-right: 30px;
  color: ${({ theme }) => theme.colors.grayDark};
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
