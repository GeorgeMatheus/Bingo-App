import { BoxCards, Card, HomeContainer, Title } from "./styles";
import bingoPlayer from "../../assets/bingoPlayers.png";
import bingoCaller from "../../assets/bingoCaller.png";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";

export function Home() {
	const navigate = useNavigate();

	function handleBingoCaller() {
		navigate("/drawNumbers");
	}

	function handleBingoPlayer() {
		navigate("/insertCodePlayer");
	}

	function handleKeyDownBingoCaller(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === "Enter" || event.key === " ") {
			handleBingoCaller();
		}
	}

	function handleKeyDownBingoPlayer(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === "Enter" || event.key === " ") {
			handleBingoPlayer();
		}
	}

	return (
		<>
			<Header />
			<HomeContainer>
				<Title>Bingo Online</Title>

				<BoxCards>
					<Card
						onClick={handleBingoCaller}
						onKeyDown={handleKeyDownBingoCaller}
						tabIndex={0}
						role="button"
						aria-label="Sortear números"
					>
						<h2>Sortear números</h2>
						<img src={bingoCaller} alt="Sortear números" />
					</Card>
					<Card
						onClick={handleBingoPlayer}
						onKeyDown={handleKeyDownBingoPlayer}
						tabIndex={0}
						role="button"
						aria-label="Marcar números"
					>
						<h2>Marcar números</h2>
						<img src={bingoPlayer} alt="Marcar números" />
					</Card>
				</BoxCards>
			</HomeContainer>
		</>
	);
}
