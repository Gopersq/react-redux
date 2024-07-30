export type BuildMode = 'production' | 'development';

export interface BuildPath {
	entry: string;
	output: string;
	html: string;
}

export interface BuildOptions {
	paths: BuildPath;
	mode: BuildMode;
	isDev: boolean;
	port: number;
}

export interface BuildEnv {
	mode: BuildMode;
	port: number;
}
