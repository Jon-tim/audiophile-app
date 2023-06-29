<script>
	import { cart } from '../../store/carts';
	import Counter from '../atoms/Counter.svelte';
	import { modalOpen, modalToggle } from '../../store/cartModalStore';
	let disable = $cart.length ? '' : 'opacity-30';

	// console.log($cart);
	function closeModal() {
		if (modalOpen) {
			modalToggle();
		}
	}
</script>

<section class="flex flex-col gap-6">
	<div class="flex items-center justify-between">
		<h1 class="uppercase font-bold">cart ({$cart.totalQuantity})</h1>
		<button class="text-sm {disable} underline cursor-pointer" on:click={cart.reset}
			>Remove all</button
		>
	</div>
	<section class="flex items-center justify-center">
		{#if $cart.items.length}
			<section class="w-full flex gap-4 flex-col">
				<section class=" flex flex-col gap-4">
					{#each $cart.items as item}
						<div class="flex items-center justify-between">
							<div class="h-14 w-full flex items-center gap-3">
								<img src={item.img} alt="" class="h-full rounded-lg" />
								<div>
									<h1 class="font-bold">{item.name}</h1>
									<p class="font-bold">$ {item.price}</p>
								</div>
							</div>
							<!-- counter here -->
							<div class=" h-[30px]">
								<Counter
									quantity={item.quantity}
									increase={() => cart.increaseQuantity(item.id)}
									decrease={() => cart.decreaseQuantity(item.id)}
								/>
							</div>
						</div>
					{/each}
				</section>
				<section class="flex items-center justify-between w-full">
					<p class="uppercase">total</p>
					<p class="font-bold text-lg text-dark">
						$ {$cart.totalAmount.toLocaleString('en-US', {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
					</p>
				</section>
				<a
					on:click={closeModal}
					href="/checkout"
					class="bg-browns text-white text-center uppercase font-bold w-full py-4 hover:opacity-80"
					>checkout
				</a>
			</section>
		{:else}
			<p class="font-semibold">You have an empty cart! 💀</p>
		{/if}
	</section>
</section>
