import { writable } from 'svelte/store';
import theme from './themeStore';

export { theme };

export const sidebarCollapsed = writable(false);

export const padding = writable(true);
export const menu = writable(false);
