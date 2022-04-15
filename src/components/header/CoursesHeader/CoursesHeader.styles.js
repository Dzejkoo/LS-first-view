import styled from 'styled-components';

export const CoursesHeaderStyled = styled.div`
  border-bottom: 1px solid rgba(176, 190, 197, 0.3);
`;
export const Title = styled.div`
  display: flex;
  padding: 24px 24px 10px 24px;
  justify-content: space-between;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  h3 {
    margin: 0;
    color: ${({ theme }) => theme.colors.grayDark};
    font-size: ${({ theme }) => theme.fontSize.xl};
    line-height: 100%;
  }
  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.turkis};
    font-size: ${({ theme }) => theme.fontSize.m};
    text-transform: uppercase;
    font-weight: 700;
    border: none;
    width: 156px;
    padding: 15px 0;
    border-radius: 40px;
  }
`;
