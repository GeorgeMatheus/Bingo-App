import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/App";
import { DrawNumbers } from "./pages/DrawNumbers";
import { FillCard } from "./pages/FillCard";
import { Home } from "./pages/Home";
import { InsertCodePlayer } from "./pages/InsertCodePlayer";
import { SelectBingoCard } from "./pages/SelectBingoCard";

export function Router() {
	return (
		<Routes>
			{/* <Route path="/" element={<Home />} /> */}

			<Route path="/" element={<AppLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="drawNumbers" element={<DrawNumbers />} />
				<Route path="/insertCodePlayer" element={<InsertCodePlayer />} />
				<Route path="/selectBingoCard/:code" element={<SelectBingoCard />} />
				<Route path="/fillCard/:code" element={<FillCard />} />
			</Route>
		</Routes>
	);
}
