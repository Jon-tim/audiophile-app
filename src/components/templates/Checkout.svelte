<script>
	import Summary from '../molecules/Summary.svelte';
	import FormCheckout from '../molecules/Form_checkout.svelte';
	//==========================
	import CheckoutModal from '../atoms/Checkout_Modal.svelte';
	import { confirm } from '../../store/checkoutModalToggler';
</script>

<svelte:head>
	<title>Audiophile | Checkout</title>
</svelte:head>

<main class="relative flex flex-col gap-8 md:flex-row w-full max-w-5xl">
	<FormCheckout />
	<Summary />
</main>
{#if $confirm}
	<CheckoutModal />
{/if}
