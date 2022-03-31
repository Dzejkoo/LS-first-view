import styled from 'styled-components';
import { Time } from '../message/Message.styles';

export const Notification = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  padding-top: 10px;
  justify-content: flex-start;
  padding: 10px 0px 10px 0px;
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
  span:first-child {
    font-size: ${({ theme }) => theme.fontSize.m};
    width: 80%;
  }
`;

export const NotificationTime = styled(Time)`
  margin: 0 0 0 10px;
  &::after {
    display: ${({ isLast }) => (isLast ? 'none' : 'block')};
    right: -15px;
  }
`;
