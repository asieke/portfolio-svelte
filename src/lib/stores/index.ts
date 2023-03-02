import { writable } from 'svelte/store';

export const sidebarShowing = writable(true);
export const sidebarCollapsed = writable(false);
export const mobile = writable(false);

export const padding = writable(true);
export const menu = writable(false);
