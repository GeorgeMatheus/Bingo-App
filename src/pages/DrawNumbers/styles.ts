import styled from "styled-components";

export const DrawNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  min-height: 90vh;
  padding: 0 5rem;
  gap: 1rem;
`;

export const DrawNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

export const CurrentNumber = styled.div`
  background: ${(props) => props.theme.pink};
  border-radius: 50%;
  padding: 3rem;
  width: 200px;
  border: 3px solid ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 5rem;
    user-select: none;
  }
`;

export const ButtonDrawNumber = styled.button`
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.5rem 1rem;
  width: 200px;
  height: 50px;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.greenHover};
  }

  &:disabled {
    background: ${(props) => props.theme.gray};
    color: ${(props) => props.theme.darkGray};
    cursor: not-allowed;
  }
`;

export const DrawnNumbers = styled.div`
  background: ${(props) => props.theme.whitesmoke};
  flex: 1;
`;

export const RowOfNumbers = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardNumber = styled.div`
  user-select: none;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  margin: 1rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;
