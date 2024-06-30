import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { FillCard } from "./pages/FillCard";
import { DrawNumbers } from "./pages/DrawNumbers";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/fillCard" element={<FillCard />} />
			<Route path="/drawNumbers" element={<DrawNumbers />} />
		</Routes>
	);
}
