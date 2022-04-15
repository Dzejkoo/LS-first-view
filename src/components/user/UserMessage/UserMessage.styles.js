import styled from 'styled-components';

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
