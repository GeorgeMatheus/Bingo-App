import styled, { css, keyframes } from "styled-components";

// Animação de giro
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const DrawNumbersContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5rem;
  gap: 2rem;
`;

export const DrawnNumbersCab = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;

  button {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: none;
    border: none;
    padding: 4px;
    border-radius: 5px;
    width: 110px;
    color: #66a3ff;
    border: 1px solid #66a3ff;
  }
`;

export const BtnRestartDraw = styled.button`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: none;
  border: none;
  padding: 4px;
  border-radius: 5px;
  width: 110px;
  color: #66a3ff;
  border: 1px solid #66a3ff;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
  
  &:hover:not(:disabled) {
    background-color: rgba(179, 229, 252, 0.2); /* Light blue with transparency */
    color: rgba(0, 123, 178, 1); /* Darker blue for contrast */
    border-color: rgba(0, 123, 178, 1);
    box-shadow: 0px 4px 8px rgba(0, 123, 178, 0.2); /* Soft shadow for a 3D effect */
  }
  
  &:disabled {
    background-color: #e0e0e0; 
    color: #9e9e9e; 
    border-color: #9e9e9e;
    cursor: not-allowed;
  }
`;

export const DrawNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  gap: 2rem;
`;

export const CurrentNumber = styled.div<{ isSpinning: boolean }>`
  background: ${(props) => props.theme.orange};
  border-radius: 50%;
  width: 200px;
  border: 3px solid ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2px;
    font-size: 4rem;
    user-select: none;
    color: ${(props) => props.theme.white};
    ${({ isSpinning }) =>
    isSpinning &&
    css`
        animation: ${spin} 1s ease-in-out;
      `}
  }
`;

export const Letter = styled.p`
  color: ${(props) => props.theme.gray};
  font-size: 3rem;
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
  padding: 1rem;
  border-radius: 10px;
`;

// export const RowOfNumbers = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

export const CardNumber = styled.div`
  user-select: none;
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  margin: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
`;

// export const Letters = styled.div`
//   color: ${(props) => props.theme.black};
//   font-size: 2.5rem;
//   font-weight: bold;
//   user-select: none;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 4rem;
// `;

export const BingoPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background: #2e3a4e; /* Fundo do painel */
  border-radius: 15px;
`;

export const RowOfNumbers = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Letters = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-right: 10px;
`;

export const PanelSlot = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(145deg, #1a233a, #0b1a2b); /* Gradiente para o buraco */
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 5px 10px rgba(0, 0, 0, 0.6); /* Sombra interna */
`;

export const Ball = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, #ec5d5e, #d04747); 
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4); 
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
`;