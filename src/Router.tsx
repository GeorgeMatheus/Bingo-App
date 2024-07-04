import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FillCard } from "./pages/FillCard";
import { DrawNumbers } from "./pages/DrawNumbers";
import { InsertCodePlayer } from "./pages/InsertCodePlayer";
import { SelectBingoCard } from "./pages/SelectBingoCard";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/insertCodePlayer" element={<InsertCodePlayer />} />
			<Route path="/selectBingoCard/:code" element={<SelectBingoCard />} />
			<Route path="/fillCard/:code" element={<FillCard />} />
			<Route path="/drawNumbers" element={<DrawNumbers />} />
		</Routes>
	);
}
