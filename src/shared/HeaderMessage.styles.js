import styled from 'styled-components';

export const HeaderMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  padding-bottom: 3px;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.m};
    padding: 0 3px 0 8px;
  }
  span {
    font-size: ${({ theme }) => theme.fontSize.s};
    color: ${({ theme }) => theme.colors.turkis};
    position: relative;
    padding-left: 5px;
    &::after {
      display: ${({ isLast }) => (isLast ? 'none' : 'block')};
      position: absolute;
      content: '';
      left: 0px;
      top: 50%;
      background-color: ${({ theme }) => theme.colors.grayDark};
      transform: translate(-50%, -50%);
      width: 3px;
      height: 3px;
      border-radius: 50%;
    }
  }
`;
