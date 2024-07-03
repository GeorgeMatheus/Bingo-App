import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), "");

	const APP_ROOT = env.VITE_APP_ROOT || "/";
	const APP_PORT = Number(env.VITE_APP_PORT) || 5173;

	return {
		plugins: [react()],
		base: APP_ROOT,
		server: {
			port: APP_PORT,
		},
	};
});
