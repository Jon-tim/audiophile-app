<script>
	// import { shipping } from '../../data/Form_info';
	import {shipping} from "../../data/Form_info";
	import { cart, calcVAT } from '../../store/carts';
	import { confirm, confirmToggle } from '../../store/checkoutModalToggler';

	function closeModal() {
		if (confirm) {
			confirmToggle();
			cart.reset();
		}
	}
</script>

<section
	class="absolute top-0 left-0 w-full h-screen z-50 overflow-hidden flex items-center justify-center"
>
	<div class="absolute bg-black/50 w-full h-full" />
	<div
		class="relative bg-white w-[90%] max-w-xl h-max rounded-xl p-8 flex flex-col gap-6 items-start"
	>
		<img src="/src/public/assets/shared/desktop/check-mark.svg" alt="checmark icon" />
		<h1 class="uppercase text-4xl font-bold">
			thank you <br class="hidden md:block" /> for your order
		</h1>
		<p class="font-semibold">You will receive an email confirmation shortly.</p>
		<!-- order details -->
		<div class="overflow-hidden rounded-xl w-full flex flex-col md:flex-row">
			<div class="bg-black/10 p-6 flex flex-col gap-2 md:w-[55%] md:justify-center">
				{#each $cart.items as item}
					<div class="flex items-center justify-between font-bold uppercase text-sm">
						<div class="flex items-center gap-4">
							<img src={item.img} class="w-[50px] rounded-lg" alt="" />
							<div>
								<p class="text-dark">{item.name}</p>
								<p>$ {item.price}</p>
							</div>
						</div>
						<p>{item.quantity}x</p>
					</div>
				{/each}
			</div>
			<div class="bg-black px-12 py-6 md:w-[45%]">
				<p class="text-white/50 mb-2 font-semibold uppercase">grand total</p>
				<p class="text-white font-semibold text-lg">
					$ {($cart.totalAmount + $cart.shippingFee + Math.ceil($calcVAT)).toLocaleString()}
				</p>
			</div>
		</div>
		<!-- order details -->
		<a
			on:click={closeModal}
			href="/"
			class="uppercase text-white bg-browns block text-center font-bold py-4 w-full cursor-pointer"
			>back to home</a
		>
	</div>
</section>
