<script>
	import Button from '../../components/atoms/Button.svelte';
	export let data;
	const { products } = data;
	console.log(products[0].categoryImage);
</script>

<section class="max-w-5xl mx-auto">
	{#each products as product}
		<section class="px-6 py-8 md:px-10 lg:px-0 flex flex-col items-center gap-6">
			<div class="rounded-2xl">
				<picture>
					<source srcset={product.categoryImage.desktop} media="(mid-width: 1024px)" />
					<source srcset={product.categoryImage.tablet} media="(mid-width: 768px)" />
					<img src={product.categoryImage.mobile} alt={`image of a ${product.name}`} />
				</picture>
			</div>
			<div class="text-center flex flex-col items-center gap-4">
				{#if product.new}
					<p class="uppercase text-browns tracking-[.5rem] text-sm">new product</p>
				{/if}
				<h1 class="uppercase font-semibold text-3xl md:text-4xl">{product.name}</h1>
				<p>{product.description}</p>
				<Button bgcolor="browns" textcolor="white" fn={null} border="browns">see product</Button>
			</div>
		</section>
	{/each}
	<!-- when displayed, they are to alternate sort of -->
</section>

<style lang="postcss">
</style>
