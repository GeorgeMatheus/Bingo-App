import { useEffect, useRef } from "react";
import { Header } from "../../components/Header";
import { Button, Form, FormContainer, InputCode, InputContainer, LabelInput } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const userCode = z.object({
	userCode: z.coerce.number(),
});

type UserCodeType = z.infer<typeof userCode>;

export function InsertCodePlayer() {
	const labelRef = useRef<HTMLLabelElement>(null);
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		// formState: { errors },
	} = useForm<UserCodeType>({
		resolver: zodResolver(userCode),
	});

	function handleUserCode(userCode: UserCodeType) {
		console.log(userCode);
		navigate("/fillCard");
	}

	useEffect(() => {
		if (labelRef.current) {
			labelRef.current.focus();
		}
	}, []);

	return (
		<>
			<Header />
			<FormContainer>
				<Form onSubmit={handleSubmit(handleUserCode)}>
					<LabelInput ref={labelRef} htmlFor="input-code">
						Por favor, insira o código do jogador
					</LabelInput>
					<InputContainer>
						<InputCode {...register("userCode")} type="number" id="input-code" />
						<Button type="submit">Iniciar</Button>
					</InputContainer>
				</Form>
			</FormContainer>
		</>
	);
}
