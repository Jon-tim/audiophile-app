<script>
	import { page } from '$app/stores';
	import Button from '../../components/atoms/Button.svelte';
	export let data;

	$: products = data.products;
</script>

<div class="bg-dark py-8 md:py-12 lg:py-14">
	<h1 class=" text-white uppercase font-bold text-2xl text-center">
		{$page.params.ProductCategory}
	</h1>
</div>
<section class="max-w-5xl mx-auto flex flex-col gap-10 lg:my-16">
	{#each products as product, id (product.id)}
		<section
			class={`px-6 py-8 md:px-10 lg:px-0 flex flex-col items-center gap-10  ${
				id % 2 == 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
			} lg:justify-between`}
		>
			<div class="rounded-2xl overflow-hidden lg:w-1/2">
				<picture>
					<source srcset={product.categoryImage.desktop} media="(min-width: 1024px)" />
					<source srcset={product.categoryImage.tablet} media="(min-width: 768px)" />
					<img src={product.categoryImage.mobile} alt={`image of a ${product.name}`} />
				</picture>
			</div>
			<div
				class="text-center flex flex-col items-center gap-4 md:w-2/3 lg:w-1/2 lg:items-start lg:text-start lg:px-8"
			>
				{#if product.new}
					<p class="uppercase text-browns tracking-[.5rem] text-sm">new product</p>
				{/if}
				<h1 class="uppercase font-semibold text-3xl md:text-4xl lg:w-2/3">{product.name}</h1>
				<p>{product.description}</p>
				<Button
					bgcolor="browns"
					textcolor="white"
					fn={`${product.category}/${product.slug}`}
					border="browns">see product</Button
				>
			</div>
		</section>
	{/each}
	<!-- when displayed, they are to alternate sort of -->
</section>

<style lang="postcss">
</style>
