import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardNumbers } from "../../@types/CardNumbers";
import { User } from "../../@types/User";
import { api } from "../../services/api";
import { BingoContainer, BingoTable, Title } from "./styles";

export function FillCard() {
	const [bingoCard, setBingoCard] = useState<CardNumbers>({
		numbersB: [],
		numbersI: [],
		numbersN: [],
		numbersG: [],
		numbersO: [],
	});

	const [user, setUser] = useState<User>();

	const [markedNumbers, setMarkedNumbers] = useState<{
		[key: string]: boolean;
	}>({});

	const { code } = useParams();

	useEffect(() => {
		uploadCardUser();
	}, []);

	async function uploadCardUser() {
		try {
			const [responseCardBingo, responseUser] = await Promise.all([
				api.get(`/bingo-cards/${code}`),
				api.get(`/users/${code}`),
			]);

			const card = {
				numbersB: responseCardBingo.data.result.numbersB,
				numbersI: responseCardBingo.data.result.numbersI,
				numbersN: responseCardBingo.data.result.numbersN,
				numbersG: responseCardBingo.data.result.numbersG,
				numbersO: responseCardBingo.data.result.numbersO,
			};

			setUser(responseUser.data);
			setBingoCard(card);
		} catch (error) {
			console.error(error);
		}
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

	const columns = Object.keys(bingoCard) as (keyof CardNumbers)[];

	return (
		<>
			<BingoContainer>
				<Title>{`Bem vindo, ${user?.result?.nome}!`}</Title>
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
											className={
												markedNumbers[`${column}-${rowIndex}`] ? "marked" : "unmarked"
											}
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
