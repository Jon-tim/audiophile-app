<script>
	import { cart } from '../../store/carts';
	import { confirmToggle } from '../../store/checkoutModalToggler';
	import SummaryInfo from '../atoms/Summary_Info.svelte';
	import { calcVAT } from '../../store/carts';
	// --------------------------------------

	$: VAT = Math.ceil($calcVAT);
</script>

<div class="flex flex-col gap-2">
	<SummaryInfo title="total" details={$cart.totalAmount.toLocaleString('en-US')} />
	<SummaryInfo title="shipping" details={$cart.shippingFee} />
	<SummaryInfo title="vat (included)" details={VAT.toLocaleString('en-US')} />
	<SummaryInfo
		title="grand total"
		details={($cart.shippingFee + VAT + $cart.totalAmount).toLocaleString('en-US')}
	/>
</div>
<div class="mt-3">
	<button
		on:click={() => confirmToggle()}
		disabled={$cart.totalQuantity ? false : true}
		class="block bg-browns text-white text-center uppercase font-bold w-full py-4 hover:opacity-80 disabled:opacity-40 disabled:cursor-not-allowed"
		>continue & pay
	</button>
</div>
