import { buildLoaders } from './buildLoaders';
import { buildPlugins } from './buildPlugins';
import { buildResolvers } from './buildResolvers';
import webpack from 'webpack';
import { BuildOptions } from './types/config.types';
import { buildDevServer } from './buildDevServer';

export function buildWebpackConfig({
	paths,
	mode,
	isDev,
	port,
}: BuildOptions): webpack.Configuration {
	return {
		mode,
		entry: paths.entry,
		output: {
			path: paths.output,
			filename: '[name].[contenthash].js',
			clean: true,
		},
		module: {
			rules: buildLoaders(isDev),
		},
		devtool: isDev ? 'inline-source-map' : undefined,
		resolve: buildResolvers(),
		plugins: buildPlugins(paths),
		devServer: isDev ? buildDevServer(port, isDev) : undefined,
	};
}
