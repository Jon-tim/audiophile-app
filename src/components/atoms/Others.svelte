<script>
	import Button from './Button.svelte';
	export let name;
	export let image;
	export let link;
</script>

<section class="w-full flex flex-col items-center gap-4 md:gap-6">
	<picture class="rounded-xl overflow-hidden">
		<source srcset={image.desktop} media="(min-width: 1024px)" />
		<source srcset={image.tablet} media="(min-width: 768px)" />
		<img src={image.mobile} alt={`image of ${name}`} />
	</picture>
	<h2 class="text-xl md:text-2xl font-bold uppercase">{name}</h2>
	<Button fn={link} bgcolor="browns" textcolor="white" border="browns">see product</Button>
</section>
