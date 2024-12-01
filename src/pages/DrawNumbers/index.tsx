import { ArrowCounterClockwise } from "@phosphor-icons/react";
import { useState } from "react";

import { ConfirmationMessage } from "../../components/ConfirmationMessage";
import useModal from "../../hooks/useModal";
import {
	Ball,
	BingoPanel,
	BtnRestartDraw,
	ButtonDrawNumber,
	CurrentNumber,
	DrawNumber,
	DrawNumbersContainer,
	DrawnNumbers,
	DrawnNumbersCab,
	Letter,
	Letters,
	NotDrawn,
	PanelSlot,
	RowOfNumbers
} from "./styles";

const min = 1;
const max = 75;
const startNumber = 1;
const bingoLetters = ["B", "I", "N", "G", "O"];

export function DrawNumbers() {
	const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
	const [currentNumber, setCurrentNumber] = useState(0);
	let renderNumberCurrent = startNumber;
	const [modal, showModal] = useModal();
	const [isSpinning, setIsSpinning] = useState(false);

	function getRandomNumber() {
		setIsSpinning(true);

		setTimeout(() => {
			let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			let isNumberInArray = drawnNumbers.includes(randomNumber);

			while (isNumberInArray) {
				randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
				isNumberInArray = drawnNumbers.includes(randomNumber);
			}

			setDrawnNumbers((prevDrawnNumbers) => [
				...prevDrawnNumbers,
				randomNumber,
			]);
			setCurrentNumber(randomNumber);
			setIsSpinning(false);
		}, 1000);
	}

	function rangeNumber(num: number) {
		if (num >= 1 && num <= 15) {
			return "B";
		}
		if (num >= 16 && num <= 30) {
			return "I";
		}
		if (num >= 31 && num <= 45) {
			return "N";
		}
		if (num >= 46 && num <= 60) {
			return "G";
		}
		if (num >= 61 && num <= 75) {
			return "O";
		}
	}

	function handleResetDrawnNumbers() {
		setDrawnNumbers([]);
		setCurrentNumber(0);
	}

	function handleResetDrawnNumbersModal() {
		showModal("Deseja reiniciar o sorteio?", (onClose) => (
			<ConfirmationMessage
				onClose={onClose}
				onAction={handleResetDrawnNumbers}
			/>
		));
	}

	return (
		<>
			{modal}
			<DrawNumbersContainer>
				<DrawNumber>
					<CurrentNumber isSpinning={isSpinning}>
						<div style={{ padding: currentNumber === 0 ? "4rem" : "2rem" }}>
							{currentNumber === 0 ? (
								currentNumber
							) : (
								<>
									<Letter>{rangeNumber(currentNumber)}</Letter>
									<div>{currentNumber}</div>
								</>
							)}
						</div>
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
						<BtnRestartDraw
							type="button"
							onClick={handleResetDrawnNumbersModal}
							disabled={drawnNumbers.length === 0}
						>
							Reinicar
							<ArrowCounterClockwise size={20} />
						</BtnRestartDraw>
					</DrawnNumbersCab>

					<BingoPanel>
						{bingoLetters.map((letter) => (
							<RowOfNumbers key={letter}>
								<Letters>{letter}</Letters>
								{Array.from({ length: 15 }, () => {
									const number = renderNumberCurrent;
									renderNumberCurrent += 1;
									const isDrawn = drawnNumbers.includes(number);

									return (
										<PanelSlot key={number}>
											{isDrawn ? (
												<Ball>{number}</Ball>
											) : (
												<NotDrawn>{number}</NotDrawn>
											)}
										</PanelSlot>
									);
								})}
							</RowOfNumbers>
						))}
					</BingoPanel>
				</DrawnNumbers>
			</DrawNumbersContainer>
		</>
	);
}
