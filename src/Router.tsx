import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FillCard } from "./pages/FillCard";
import { DrawNumbers } from "./pages/DrawNumbers";
import { InsertCodePlayer } from "./pages/InsertCodePlayer";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/insertCodePlayer" element={<InsertCodePlayer />} />
			<Route path="/fillCard" element={<FillCard />} />
			<Route path="/drawNumbers" element={<DrawNumbers />} />
		</Routes>
	);
}
