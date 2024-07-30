type Mods = Record<string, boolean | string>;

export const classNames = (
	cls: string,
	additional: string[] = [],
	mods: Mods = {}
): string => {
	return [
		cls,
		...additional,
		...Object.entries(mods).flatMap(([key, value]) => (value ? key : [])),
	].join(' ');
};
