import { writable } from 'svelte/store';
export const toggler = createCount();

function createCount() {
	const { subscribe, update } = writable(false);

	return {
		subscribe,
		toggleMenu: () => {
			 update((value) => {
					const isMobileNavOpen = !value;

					if (isMobileNavOpen) {
						document.body.style.overflow = 'hidden';
					} else {
						document.body.style.overflow = 'unset';
					}

					return !value;
				});
		}
	};
}
