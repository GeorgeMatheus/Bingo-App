import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { BingoContainer, BingoTable, Title } from "./styles";
import { CardNumbers } from "../../@types/CardNumbers";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { User } from "../../@types/User";

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
		const responseCardBingo = await api.get(`/bingo-cards/${code}`);
		const responseUser = await api.get(`/users/${code}`);

		console.log(responseCardBingo.data);
		console.log(responseUser.data);

		const card = {
			numbersB: responseCardBingo.data.result.numbersB,
			numbersI: responseCardBingo.data.result.numbersI,
			numbersN: responseCardBingo.data.result.numbersN,
			numbersG: responseCardBingo.data.result.numbersG,
			numbersO: responseCardBingo.data.result.numbersO,
		};

		setUser(responseUser.data);
		setBingoCard(card);
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
			<Header />
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
