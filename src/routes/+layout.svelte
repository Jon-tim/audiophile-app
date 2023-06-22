<script>
	import '../app.css';
	import Footer from '../components/molecules/Footer.svelte';
	import Navbar from '../components/molecules/Navbar.svelte';
</script>

<main class="relative">
	<Navbar />
	<slot />
	<Footer />
</main>
