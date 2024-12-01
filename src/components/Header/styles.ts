import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 5px;
  background-image: ${props => props.theme.gradient};
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  
  img {
    width: 150px;
    cursor: pointer;
  }
`;
