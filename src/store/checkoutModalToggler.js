import { writable } from 'svelte/store';

let confirm = writable(false);

function confirmToggle() {
	confirm.update((n) => !n);
}

export { confirm, confirmToggle };
