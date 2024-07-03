import { useState } from "react";
import { Header } from "../../components/Header";
import { BingoContainer, BingoTable, Title } from "./styles";

const card1 = {
	result: {
		numbersB: [3, 7, 12, 14, 9],
		numbersI: [17, 23, 28, 29, 25],
		numbersN: [31, 36, 37, 48, 42],
		numbersG: [46, 53, 57, 59, 60],
		numbers0: [64, 67, 68, 70, 75],
	},
};

type ResultKey = keyof typeof card1.result;

export function FillCard() {
	const { result } = card1;
	const columns = Object.keys(result) as ResultKey[];
	const [markedNumbers, setMarkedNumbers] = useState<{
		[key: string]: boolean;
	}>({});

	function handleCheckNumber(
		rowIndex: number,
		colIndex: number,
		column: ResultKey,
	) {
		const key = `${column}-${rowIndex}`;
		setMarkedNumbers((prev) => ({
			...prev,
			[key]: !prev[key],
		}));
	}

	function handleKeyDownBingoPlayer(
		event: React.KeyboardEvent<HTMLDivElement>,
		rowIndex: number,
		colIndex: number,
		column: ResultKey,
	) {
		if (event.key === "Enter" || event.key === " ") {
			handleCheckNumber(rowIndex, colIndex, column);
		}
	}

	return (
		<>
			<Header />
			<BingoContainer>
				<Title>Bem vindo(a), fulano!</Title>
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
								{columns.map((column, colIndex) => (
									<td key={column}>
										<div
											onKeyDown={(event) =>
												handleKeyDownBingoPlayer(
													event,
													rowIndex,
													colIndex,
													column,
												)
											}
											tabIndex={0}
											role="button"
											aria-label="Marcar números"
											onClick={() =>
												handleCheckNumber(rowIndex, colIndex, column)
											}
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
											{result[column][rowIndex]}
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
