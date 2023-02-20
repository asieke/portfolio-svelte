import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import colors from 'tailwindcss/colors';

const defaultValue = 'dark';
const initialValue = browser ? window.localStorage.getItem('theme') ?? defaultValue : defaultValue;

const theme = writable<string>(initialValue);

theme.subscribe((value) => {
	if (browser) {
		window.localStorage.setItem('theme', value);
	}
});

//create an interface for theme colors with string key
//and string value
export interface ThemeColors {
	[key: string]: {
		[key: string]: string;
	};
}

export const themeColors: ThemeColors = {
	dark: {
		'bg-main': colors.slate[700],
		'bg-nav': colors.slate[900],
		'bg-content': colors.slate[700],
		'bg-sidebar': colors.slate[800],
		'bg-profile': colors.slate[900],
		text: colors.slate[200]
	},
	light: {
		'bg-main': colors.slate[100],
		'bg-nav': colors.slate[300],
		'bg-content': colors.slate[100],
		'bg-sidebar': colors.slate[200],
		'bg-profile': colors.slate[300],
		text: colors.slate[800]
	}
};

export default theme;
