import { writable } from 'svelte/store';
import { browser } from '$app/environment';
import { generateClickHandler } from '$lib/shared/globals';
import type { UserProps } from '../shared/types';

export const menu = writable(false);
export const sidebar = writable(false);
export const userStore = writable<UserProps>({
	id: null,
	updated_at: null,
	username: null,
	full_name: null,
	avatar_url: null,
	website: null,
	dob: null,
	accepted_tos: null,
	email: null
});

const menuOutsideClick = generateClickHandler('userMenu', () => menu.set(false));
const sidebarOutsideClick = generateClickHandler('sidebar', () => sidebar.set(false));

menu.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', menuOutsideClick);
		} else {
			document.removeEventListener('click', menuOutsideClick);
		}
	}
});

sidebar.subscribe((value) => {
	if (browser) {
		if (value === true) {
			document.addEventListener('click', sidebarOutsideClick);
		} else {
			document.removeEventListener('click', sidebarOutsideClick);
		}
	}
});
