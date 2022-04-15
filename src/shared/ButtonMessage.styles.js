import styled from 'styled-components';

export const ButtonMessage = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  svg {
    fill: ${({ theme }) => theme.colors.turkis};
  }
  button {
    background: none;
    border: none;
    text-transform: uppercase;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.turkis};
    cursor: pointer;
    padding-right: 15px;
  }
`;
