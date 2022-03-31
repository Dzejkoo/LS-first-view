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

export const Chat = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  img {
    width: 35px;
    height: 35px;
  }
`;

export const UserMessageInfo = styled.div`
  padding: 6px 10px 6px 20px;
  width: 100%;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.fontSize.m};
`;

export const Time = styled.span`
  font-size: 10px;
  position: relative;
  margin-left: auto;
  &::after {
    display: ${({ isLast }) => (isLast ? 'none' : 'block')};
    position: absolute;
    content: '';
    right: -15px;
    top: 50%;
    background-color: ${({ theme }) => theme.colors.violetRed};
    transform: translate(-50%, -50%);
    width: 7px;
    height: 7px;
    border-radius: 50%;
  }
`;
export const DeliveredName = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;
export const DeliveredMessage = styled.div`
  font-size: ${({ theme }) => theme.fontSize.m};
  opacity: 0.5;
`;

export const SeeAll = styled.div`
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
