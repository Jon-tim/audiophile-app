<script>
	import { page } from '$app/stores';
	import BestGear from '../../components/molecules/BestGear.svelte';
	import ProductLinks from '../../components/molecules/ProductLinks.svelte';
</script>

<svelte:head>
	<title>Audiophile | {$page.params.ProductCategory}</title>
</svelte:head>

<main>
	<div class="bg-dark py-8 md:py-12 lg:py-14">
		<h1 class=" text-white uppercase font-bold text-2xl text-center">{$page.params.ProductCategory}</h1>
	</div>
	<slot />
	<ProductLinks />
	<BestGear />
</main>
