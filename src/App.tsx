import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/defaults";

const baseUrl = import.meta.env.VITE_APP_ROOT || "/";

export function App() {
	return (
		<ThemeProvider theme={defaultTheme}>
			<BrowserRouter basename={baseUrl}>
				<Router />
			</BrowserRouter>
			<GlobalStyle />
		</ThemeProvider>
	);
}
