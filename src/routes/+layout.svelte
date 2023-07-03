<script>
	import '../app.css';
	import Footer from '../components/molecules/Footer.svelte';
	import Navbar from '../components/molecules/Navbar.svelte';
	import CheckoutModal from '../components/atoms/Checkout_Modal.svelte';
	import { confirm } from '../store/checkoutModalToggler';
</script>

<main class="relative">
	{#if $confirm}
		<CheckoutModal />
	{/if}
	<Navbar />
	<slot />
	<Footer />
</main>
