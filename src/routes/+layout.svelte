<script>
	import '../app.css';
	import Footer from '../components/molecules/Footer.svelte';
	import Navbar from '../components/molecules/Navbar.svelte';
	import CheckoutModal from '../components/atoms/Checkout_Modal.svelte';
	import CartModal from '../components/molecules/CartModal.svelte';
	import { confirm } from '../store/checkoutModalToggler';
	import { modalOpen, modalToggle } from '../store/cartModalStore';
</script>

<main class="relative">
	<!-- {#if $modalOpen}
		<CartModal />
	{/if} -->
	<!-- {#if $confirm}
		<CheckoutModal />
	{/if} -->
	<Navbar />
	<slot />
	<Footer />
</main>
