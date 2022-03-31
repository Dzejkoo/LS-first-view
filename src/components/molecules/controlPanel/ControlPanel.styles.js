import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: auto;
`;
export const CompanyInfo = styled.div`
  color: ${({ theme }) => theme.colors.grayMedium};
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  img {
    padding: 16px 16px 16px 23px;
  }
`;
