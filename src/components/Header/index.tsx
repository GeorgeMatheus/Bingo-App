import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import { HeaderContainer } from "./styles";

export function Header() {
	const navigate = useNavigate();

	function handleNavigateHome() {
		navigate("/");
	}

	function handleKeyDownHomePag(event: React.KeyboardEvent<HTMLDivElement>) {
		if (event.key === "Enter" || event.key === " ") {
			handleNavigateHome();
		}
	}

	return (
		<HeaderContainer>
			<img
				src={logo}
				alt="logo"
				onClick={handleNavigateHome}
				onKeyDown={handleKeyDownHomePag}
			/>
		</HeaderContainer>
	);
}
