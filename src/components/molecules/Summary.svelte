<script>
	import { cart } from '../../store/carts';
	import CardCheckout from '../atoms/Card_checkout.svelte';

	let shippingFee = 50;
	$: VAT = 0.2 * $cart.totalAmount;
</script>

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
	<div class="flex flex-col gap-2">
		<div class="flex items-center justify-between">
			<p class="uppercase">total</p>
			<p class="font-bold text-lg text-dark">
				$ {$cart.totalAmount.toLocaleString('en-US')}
			</p>
		</div>
		<div class="flex items-center justify-between">
			<p class="uppercase">shipping</p>
			<p class="font-bold text-lg text-dark">$ {shippingFee}</p>
		</div>
		<div class="flex items-center justify-between">
			<p class="uppercase">vat (included)</p>
			<p class="font-bold text-lg text-dark">
				$ {VAT.toLocaleString('en-US')}
			</p>
		</div>
		<div class="flex items-center justify-between">
			<p class="uppercase">grand total</p>
			<p class="font-bold text-lg text-browns">
				$ {(shippingFee + VAT + $cart.totalAmount).toLocaleString('en-US')}
			</p>
		</div>
	</div>
	<div class="mt-3">
		<button
			disabled={$cart.totalQuantity ? false : true}
			class="block bg-browns text-white text-center uppercase font-bold w-full py-4 hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
			>continue & pay
		</button>
	</div>
</CardCheckout>
