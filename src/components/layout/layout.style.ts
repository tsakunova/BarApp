import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.color.mainBGColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  color: ${(props) => props.theme.color.white};
  font-family: 'JosefinRegular';
  font-size: 24px;
`;
