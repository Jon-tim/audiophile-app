import { writable } from 'svelte/store';

const initialState = {
	items: [],
	totalQuantity: 0,
	totalAmount: 0
};

function createCart() {
	const { subscribe, update } = writable(initialState);

	return {
		subscribe,
		addToCart: (id, name, price, quantity, img) => {
			update((state) => {
				const existingItem = state.items.find((item) => item.id === id);
				if (existingItem) {
					existingItem.quantity += quantity;
				} else {
					const newItem = { id, name, price, quantity, img };
					state.items = [...state.items, newItem];
				}
				state.totalQuantity += quantity;
				state.totalAmount += price * quantity;
				// console.log(items);
				return state;
			});
		},
		increaseQuantity: (id) => {
			update((state) => {
				const itemToBeIncreased = state.items.find((item) => item.id === id);
				if (itemToBeIncreased) {
					itemToBeIncreased.quantity += 1;
					state.totalQuantity += 1;
					state.totalAmount += itemToBeIncreased.price;
				}
				return state;
			});
		},
		decreaseQuantity: (id) => {
			update((state) => {
				const itemToBeDecreased = state.items.find((item) => item.id === id);
				itemToBeDecreased.quantity -= 1;
				state.totalQuantity -= 1;
				state.totalAmount -= itemToBeDecreased.price;
				if (itemToBeDecreased.quantity === 0) {
					state.items = state.items.filter((item) => item.id !== id);
				}
				return state;
			});
		},
		reset: () => {
			update((state) => {
				state.items = [];
				state.totalQuantity = 0;
				state.totalAmount = 0;
				return state;
			});
		}
	};
}

export const cart = createCart();
