import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: auto;
`;
export const CompanyInfo = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  button {
    border: none;
    background: none;
    color: ${({ theme }) => theme.colors.grayMedium};
    cursor: pointer;
  }
  img {
    padding: 16px 16px 16px 23px;
  }
`;
