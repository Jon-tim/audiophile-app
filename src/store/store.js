import { writable } from 'svelte/store';

function createCount() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggleMenu: () => update((n) => !n)
	};
}

export const toggler = createCount();
