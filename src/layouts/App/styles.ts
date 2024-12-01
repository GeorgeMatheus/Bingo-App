import styled from "styled-components";

export const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;     
  flex-direction: column;
  background: ${props => props.theme.darkBlue};
  /* background: #f1faee; */
`;

export const Content = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`