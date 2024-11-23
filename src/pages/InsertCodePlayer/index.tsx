import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { api } from "../../services/api";
import {
	Button,
	ErrorText,
	Form,
	FormContainer,
	InputCode,
	InputContainer,
	LabelInput,
} from "./styles";

const userCode = z.object({
	userCode: z.coerce.number(),
});

type UserCodeType = z.infer<typeof userCode>;

export function InsertCodePlayer() {
	const labelRef = useRef<HTMLLabelElement>(null);
	const [errorText, setErrorText] = useState("");
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { isSubmitting },
	} = useForm<UserCodeType>({
		resolver: zodResolver(userCode),
	});

	async function handleUserCode({ userCode }: UserCodeType) {
		try {
			let response = await api.get(`/users/${userCode}`);

			response = await api.get(`/bingo-cards/${userCode}`);

			if (response.data.message === "Usuário não possui cartela.") {
				navigate(`/selectBingoCard/${userCode}`);
			} else if (response.data.message === "Sucesso ao carregar cartela.") {
				navigate(`/fillCard/${userCode}`);
			}
		} catch (error: unknown) {
			console.error(error);

			if (axios.isAxiosError(error)) {
				setErrorText(error.response?.data?.message);
			} else {
				console.error("Unexpected error", error);
			}
		}
	}

	useEffect(() => {
		if (labelRef.current) {
			labelRef.current.focus();
		}
	}, []);

	// console.log(errors);

	return (
		<>
			<FormContainer>
				<Form onSubmit={handleSubmit(handleUserCode)}>
					<LabelInput ref={labelRef} htmlFor="input-code">
						Por favor, insira o código do jogador
					</LabelInput>
					<InputContainer>
						<InputCode
							{...register("userCode")}
							type="number"
							id="input-code"
							required
						/>
						<Button type="submit" disabled={isSubmitting}>
							Iniciar
						</Button>
					</InputContainer>
					{errorText && <ErrorText>{errorText}</ErrorText>}
				</Form>
			</FormContainer>
		</>
	);
}
