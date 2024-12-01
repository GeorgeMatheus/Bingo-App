import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* min-height: 90vh; */
  gap: 1rem;
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
  padding: 1.5rem;
  border-radius: 15px;
  cursor: pointer;

  img {
    width: 250px;
  }

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;