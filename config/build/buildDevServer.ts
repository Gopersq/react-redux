import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export function buildDevServer(
	port: number,
	isDev: boolean
): DevServerConfiguration {
	return {
		port,
		open: true,
		historyApiFallback: true,
	};
}
