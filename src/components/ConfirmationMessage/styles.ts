import styled from "styled-components";

export const ConfirmationMessageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const ButtonSuccess = styled.button`
	background-color: #009933;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
  transition: background-color 0.3s ease;

	&:hover {
		background-color: #006622;
	}
`;

export const ButtonCancel = styled.button`
	background-color: #cc0000;
	color: white;
	padding: 10px 20px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-size: 16px;
  transition: background-color 0.3s ease;

	&:hover {
		background-color: #990000;
	}
`;
