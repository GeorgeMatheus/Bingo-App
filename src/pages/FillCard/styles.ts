import styled from "styled-components";

export const BingoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

export const BingoTable = styled.table`
  border-collapse: collapse;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  th {
    border: 1px solid #ddd;
    padding: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    background-color: #4CAF50;
    color: white;
  }

  td {
    border: 1px solid #ddd;
    padding: 20px;
    width: 50px;
    height: 50px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
  }
`;
