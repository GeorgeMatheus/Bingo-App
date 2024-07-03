import styled from "styled-components";

export const BingoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  min-height: 90vh;
`;

export const Title = styled.h1`
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
    cursor: pointer;
    padding: 6px;
  }

  td > div {
    user-select: none;
    background: ${(props) => props.theme.green};
    padding: 25px;
    color: ${(props) => props.theme.white};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.24) 0px 4px 6px;
    transition: box-shadow 0.2s, transform 0.2s;
    transform-style: preserve-3d;
    transform: perspective(800px);

    &:active {
      box-shadow: inset rgba(0, 0, 0, 0.2) 0px 1px 2px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      transform: perspective(800px) rotateX(30deg) translateY(6px);
    }
  }
`;
