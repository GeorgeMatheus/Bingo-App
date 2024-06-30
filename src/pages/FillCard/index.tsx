// import { Star } from '@phosphor-icons/react';
import { BingoContainer, BingoTable } from "./styles";

const card = [
	[7, 20, 35, 47, 13],
	[12, 16, 42, 50, 61],
	[1, 19, null, 60, 74],
	[5, 29, 39, 51, 68],
	[13, 18, 44, 58, 70],
];

export function FillCard() {
	function handleCheckNumber() {
		console.log("clique");
	}

	return (
		<BingoContainer>
			<BingoTable>
				<table>
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
						{card.map((row, rowIndex) => (
							<tr key={rowIndex}>
								{row.map((number, colIndex) => (
									<td key={colIndex} onClick={handleCheckNumber}>
										{number !== null ? number : <span>A</span>}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</BingoTable>
		</BingoContainer>
	);
}
