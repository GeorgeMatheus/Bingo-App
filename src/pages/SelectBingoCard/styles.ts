import styled from "styled-components";

export const BingoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 90vh;
`;

export const CabCardNumbers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ContainerButtons = styled.div`
  display: flex;
  gap: 1rem;
`;

export const BtnSelectCard = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  background: #0099ff;
  color: ${(props) => props.theme.white};
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #007acc;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #b3b3b3;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const BtnConfirmCard = styled.button`
  display: flex;
  align-items: center;
  gap: 3px;
  border: none;
  background: #2eb82e;
  color: ${(props) => props.theme.white};
  font-size: 1.1rem;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #269f26;
    transform: translateY(-2px);
  }

  &:disabled {
    background-color: #b3b3b3;
    color: #666666;
    cursor: not-allowed;
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
`;

export const Subtitulo = styled.h3`
  color: ${(props) => props.theme.white};
`;

export const BingoTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background: ${(props) => props.theme.whitesmoke};
  border-radius: 5px;
  border: none;

  th {
    padding: 25px;
    text-align: center;
    font-size: 18px;
    color: ${(props) => props.theme.black};
    border: none;
    font-size: 4rem;
  }

  td {
    text-align: center;
    font-size: 1.5rem;
    width: 100px;
    height: 100px;
    padding: 1rem;
  }

  td > div {
    text-align: center;
    user-select: none;
    background: ${(props) => props.theme.blue};
    padding: 20px 10px;
    width: 100%;
    color: ${(props) => props.theme.white};
    border-radius: 47%;
    margin: 0 auto;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.24) 0px 4px 6px;
  }
`;
