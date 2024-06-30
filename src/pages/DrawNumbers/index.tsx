import { useState } from "react";

const min = 1;
const max = 75;

export function DrawNumbers() {
	const [drawnNumbers, setDrawnNumbers] = useState<number[]>([]);
	const [currentNumber, setCurrentNumber] = useState(0);

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
		<div>
			<h1>Sorteio dos números</h1>
			<p>{currentNumber}</p>
			<button type="button" onClick={getRandomNumber}>
				Sortear número
			</button>

			<h1>Números sorteados</h1>
			<ul>
				{drawnNumbers.map((num) => (
					<li key={num}>{num}</li>
				))}
			</ul>
			<button type="button" onClick={() => setDrawnNumbers([])}>
				Reinicar sorteio
			</button>
		</div>
	);
}
