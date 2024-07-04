import styled from "styled-components";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
`;

export const Form = styled.form`
  background: ${(props) => props.theme.whitesmoke};
  padding: 1.2rem;
  border-radius: 5px;
  min-width: 40vw;
  min-height: 130px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
`;

export const InputContainer = styled.div`
  display: flex;
  gap: 5px;
`;

export const LabelInput = styled.label`
  font-weight: bold;
  font-size: 1.3rem;
`;

export const InputCode = styled.input` 
  flex: 1;
  padding: 0.5rem 0.5rem;
  border: none;
  background: #f0f0f0;
  color: #333;
  border-radius: 5px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(81, 203, 238, 1);
    border: 1px solid rgba(81, 203, 238, 1);
  }
`;

export const Button = styled.button`
  background: ${(props) => props.theme.green};
  color: ${(props) => props.theme.white};
  border: none;
  padding: 0.5rem 1rem;
  width: 5rem;
  border-radius: 5px;
  transition: background 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.greenHover};
  }
`;

export const ErrorText = styled.p`
  color: #cc0000;
  text-align: center;
`;
