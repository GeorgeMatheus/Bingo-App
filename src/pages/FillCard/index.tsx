import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
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
import { CardNumbers } from "../../@types/CardNumbers";

export function FillCard() {
	const [bingoCard, setBingoCard] = useState<CardNumbers>({
		numbersB: [],
		numbersI: [],
		numbersN: [],
		numbersG: [],
		numbersO: [],
	});

	const [markedNumbers, setMarkedNumbers] = useState<{
		[key: string]: boolean;
	}>({});

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
			return Array.from(numbers);
		}

		return {
			numbersB: getRandomNumbersInRange(1, 15, 5),
			numbersI: getRandomNumbersInRange(16, 30, 5),
			numbersN: getRandomNumbersInRange(31, 45, 5),
			numbersG: getRandomNumbersInRange(46, 60, 5),
			numbersO: getRandomNumbersInRange(61, 75, 5),
		};
	}

	function handleCheckNumber(rowIndex: number, column: keyof CardNumbers) {
		const key = `${column}-${rowIndex}`;
		setMarkedNumbers((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	}

	function handleKeyDownBingoPlayer(
		event: React.KeyboardEvent<HTMLDivElement>,
		rowIndex: number,
		column: keyof CardNumbers,
	) {
		if (event.key === "Enter" || event.key === " ") {
			handleCheckNumber(rowIndex, column);
		}
	}

	function handleSelectCardNumber() {
		console.log(bingoCard);
	}

	const columns = Object.keys(bingoCard) as (keyof CardNumbers)[];

	return (
		<>
			<Header />
			<BingoContainer>
				<CabCardNumbers>
					<Title>Bem vindo(a)!</Title>
					<Subtitulo>Selecione uma cartela</Subtitulo>
					<ContainerButtons>
						<BtnSelectCard onClick={() => setBingoCard(generateBingoCard())}>
							Nova cartela
						</BtnSelectCard>
						<BtnConfirmCard onClick={handleSelectCardNumber}>
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
										<div
											onKeyDown={(event) =>
												handleKeyDownBingoPlayer(event, rowIndex, column)
											}
											tabIndex={0}
											role="button"
											aria-label="Marcar números"
											onClick={() => handleCheckNumber(rowIndex, column)}
											style={{
												backgroundColor: markedNumbers[`${column}-${rowIndex}`]
													? "#EC5D5E"
													: "#07D289",
												boxShadow: markedNumbers[`${column}-${rowIndex}`]
													? "none"
													: "rgba(0, 0, 0, 0.2) 0px 3px 5px",
												transform: markedNumbers[`${column}-${rowIndex}`]
													? "translateY(3px)"
													: "none",
											}}
										>
											{bingoCard[column][rowIndex]}
										</div>
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
