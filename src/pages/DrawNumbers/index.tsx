import { useState } from "react";
import { Header } from "../../components/Header";
import { ArrowCounterClockwise } from "@phosphor-icons/react";

import {
	BtnRestartDraw,
	ButtonDrawNumber,
	CardNumber,
	CurrentNumber,
	DrawNumber,
	DrawNumbersContainer,
	DrawnNumbers,
	DrawnNumbersCab,
	Letters,
	RowOfNumbers,
} from "./styles";

const min = 1;
const max = 75;
const startNumber = 1;
const bingoLetters = ["B", "I", "N", "G", "O"];

export function DrawNumbers() {
	const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
	const [currentNumber, setCurrentNumber] = useState(0);
	let renderNumberCurrent = startNumber;

	function getRandomNumber() {
		let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

		let isNumberInArray = drawnNumbers.includes(randomNumber);

		while (isNumberInArray) {
			randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

			isNumberInArray = drawnNumbers.includes(randomNumber);
		}

		setDrawnNumbers((prevDrawnNumbers) => [...prevDrawnNumbers, randomNumber]);
		setCurrentNumber(randomNumber);
	}

	return (
		<>
			<Header />
			<DrawNumbersContainer>
				{/* <h1>Sorteio dos números</h1> */}
				<DrawNumber>
					<CurrentNumber>
						<h1>{currentNumber}</h1>
					</CurrentNumber>
					<ButtonDrawNumber
						type="button"
						onClick={getRandomNumber}
						disabled={drawnNumbers.length === 75}
					>
						Sortear número
					</ButtonDrawNumber>
				</DrawNumber>

				<DrawnNumbers>
					<DrawnNumbersCab>
						<h1>Números sorteados</h1>
						<BtnRestartDraw type="button" onClick={() => setDrawnNumbers([])}>
							Reinicar
							<ArrowCounterClockwise size={20} />
						</BtnRestartDraw>
					</DrawnNumbersCab>

					<div>
						{bingoLetters.map((letter) => (
							<RowOfNumbers key={letter}>
								<Letters>{letter}</Letters>
								{Array.from({ length: 15 }, () => {
									const number = renderNumberCurrent;
									renderNumberCurrent += 1;
									const isDrawn = drawnNumbers.includes(number);
									return (
										<CardNumber
											key={number}
											style={{
												backgroundColor: isDrawn ? "#EC5D5E" : "#07D289",
											}}
										>
											{number}
										</CardNumber>
									);
								})}
							</RowOfNumbers>
						))}
					</div>
				</DrawnNumbers>
			</DrawNumbersContainer>
		</>
	);
}
