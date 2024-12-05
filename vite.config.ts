import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const APP_ROOT = "/";
	const APP_PORT = 3000;

	return {
		plugins: [react()],
		base: APP_ROOT,
		server: {
			port: APP_PORT,
		},
	};
});
