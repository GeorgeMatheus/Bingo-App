import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 2rem;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.white};
`;

export const BoxCards = styled.div`
  display: flex;
  gap: 5rem;
  flex-wrap: wrap;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  background: ${(props) => props.theme.whitesmoke};
  padding: 2rem;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 400px;
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.5rem 1rem;
  width: 400px;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.greenHover};
  }
`;
