<script>
	import Summary from '../molecules/Summary.svelte';
	import FormCheckout from '../molecules/Form_checkout.svelte';
</script>

<svelte:head>
	<title>Audiophile | Checkout</title>
</svelte:head>

<main class="flex flex-col gap-8 md:flex-row w-full max-w-5xl">
	<FormCheckout />
	<Summary />
</main>
