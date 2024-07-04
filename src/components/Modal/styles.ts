import styled from "styled-components";

export const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  flex-direction: column;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(40, 40, 40, 0.6);
`;
export const Container = styled.div`
  padding: 1.5rem;
  min-height: 100px;
  min-width: 300px;
  display: flex;
  flex-grow: 0px;
  background-color: #fff;
  flex-direction: column;
  position: relative;
  box-shadow: 0 0 20px 0 #444;
  border-radius: 10px;
`;
export const Title = styled.h2`
  color: ${(props) => props.theme.black};
  margin: 0px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
`;
export const CloseButton = styled.button`
  border: none;
  position: absolute;
  right: 5px;
  top: 5px;
  font-size: 18px;
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 20px;
  height: 20px;
  text-align: center;
  cursor: pointer;
  background: none;
  padding: 2px;

  &:hover{
    background-color: #ddd;
  }
`;

export const Content = styled.div`
  padding-top: 20px;
`;
export const ButtonX = styled.span`
  font-weight: bold;
  color: #a6a6a6;
`;
