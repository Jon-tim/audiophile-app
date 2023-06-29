import { writable } from 'svelte/store';

let modalOpen = writable(false);

function modalToggle() {
	modalOpen.update((n)=> !n)
}

export { modalOpen, modalToggle };
