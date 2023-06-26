<script>
	import { page } from '$app/stores';
	import BestGear from '../../components/molecules/BestGear.svelte';
	import ProductLinks from '../../components/molecules/ProductLinks.svelte';
</script>

<svelte:head>
	<title>Audiophile | {$page.params.ProductCategory}</title>
</svelte:head>

<main>
	<slot />
	<ProductLinks />
	<BestGear />
</main>
