import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CardNumbers } from "../../@types/CardNumbers";
import { ConfirmationMessage } from "../../components/ConfirmationMessage";
import useModal from "../../hooks/useModal";
import { api } from "../../services/api";
import {
	BingoContainer,
	BingoTable,
	BtnConfirmCard,
	BtnSelectCard,
	CabCardNumbers,
	ContainerButtons,
	Subtitulo,
	Title,
} from "./styles";

export function SelectBingoCard() {
	const [bingoCard, setBingoCard] = useState<CardNumbers>({
		numbersB: [],
		numbersI: [],
		numbersN: [],
		numbersG: [],
		numbersO: [],
	});
	const { code } = useParams();
	const navigate = useNavigate();
	const [modal, showModal] = useModal();

	useEffect(() => {
		setBingoCard(generateBingoCard());
	}, []);

	function generateBingoCard(): CardNumbers {
		function getRandomNumbersInRange(
			min: number,
			max: number,
			count: number,
		): number[] {
			const numbers = new Set<number>();
			while (numbers.size < count) {
				const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
				numbers.add(randomNum);
			}
			return Array.from(numbers).sort((a, b) => a - b);
		}

		return {
			numbersB: getRandomNumbersInRange(1, 15, 5),
			numbersI: getRandomNumbersInRange(16, 30, 5),
			numbersN: getRandomNumbersInRange(31, 45, 5),
			numbersG: getRandomNumbersInRange(46, 60, 5),
			numbersO: getRandomNumbersInRange(61, 75, 5),
		};
	}

	async function handleSelectCardNumber() {
		const data = {
			...bingoCard,
			code: code,
		};

		try {
			const response = await api.post("/bingo-cards", data);

			console.log(response.data);

			navigate(`/fillCard/${code}`);
		} catch (error) {
			console.log(error);
		}
	}

	function handleSelectCardNumberModal() {
		showModal("Deseja escolher esta cartela?", (onClose) => (
			<ConfirmationMessage
				onClose={onClose}
				onAction={handleSelectCardNumber}
			/>
		));
	}

	const columns = Object.keys(bingoCard) as (keyof CardNumbers)[];

	return (
		<>
			{modal}
			<BingoContainer>
				<CabCardNumbers>
					<Title>Bem vindo(a)!</Title>
					<Subtitulo>Selecione uma cartela</Subtitulo>
					<ContainerButtons>
						<BtnSelectCard onClick={() => setBingoCard(generateBingoCard())}>
							Nova cartela
						</BtnSelectCard>
						<BtnConfirmCard onClick={handleSelectCardNumberModal}>
							Confirmar
						</BtnConfirmCard>
					</ContainerButtons>
				</CabCardNumbers>

				<BingoTable>
					<thead>
						<tr>
							<th>B</th>
							<th>I</th>
							<th>N</th>
							<th>G</th>
							<th>O</th>
						</tr>
					</thead>
					<tbody>
						{[0, 1, 2, 3, 4].map((rowIndex) => (
							<tr key={rowIndex}>
								{columns.map((column) => (
									<td key={column}>
										<div>{bingoCard[column][rowIndex]}</div>
									</td>
								))}
							</tr>
						))}
					</tbody>
				</BingoTable>
			</BingoContainer>
		</>
	);
}
