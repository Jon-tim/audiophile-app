<script>
	import { cart } from '../../store/carts';
	import CardCheckout from '../atoms/Card_checkout.svelte';
	import SummaryFigures from '../templates/SummaryFigures.svelte';
	//imports------------------------------------------------
	let shippingFee = 50;
	$: VAT = 0.2 * $cart.totalAmount;
</script>

<section class="md:w-[30%]">
	<CardCheckout>
		<h1 class="uppercase font-semibold text-xl">summary</h1>
		<div>
			{#if $cart.items.length}
				<div class="flex flex-col gap-4">
					{#each $cart.items as item (item.id)}
						<div class="flex items-center justify-between">
							<div class="h-14 w-full flex items-center gap-3">
								<img src={item.img} alt="" class="h-full rounded-lg" />
								<div>
									<h1 class="font-bold uppercase">{item.name}</h1>
									<p class="font-bold">$ {item.price.toLocaleString()}</p>
								</div>
							</div>
							<!-- quantity here -->
							<p class="font-bold">x{item.quantity}</p>
						</div>
					{/each}
				</div>
			{:else}
				<p class="text-center font-semibold">You have an empty cart! 💀</p>
			{/if}
		</div>
		<SummaryFigures />
	</CardCheckout>
</section>
