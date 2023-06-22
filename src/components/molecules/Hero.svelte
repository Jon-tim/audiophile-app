<script>
	import Button from '../atoms/Button.svelte';
</script>

<section class="hero h-[95vh] p-6 flex items-center relative">
	<div class="flex gap-3 flex-col items-center text-center w-[90%] mx-auto relative z-10">
		<p class="uppercase text-white/50 text-xs font-semibold tracking-[.7rem]">new product</p>
		<h1 class="uppercase text-[2.5rem] text-white font-extrabold">xx99 mark ii headphone</h1>
		<p class="text-white/80 mb-6 text-base w-[85%]">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<Button bgcolor="browns" border="browns" textcolor="white" fn={null}>see product</Button>
	</div>
	<!-- <section class="absolute w-full top-0">
		<picture class="w-full">
			<source
				media="(min-width: 1024px)"
				class=""
				srcset="/src/public/assets/home/desktop/image-hero.jpg"
			/>
			<source media="(min-width: 768px)" srcset="/src/public/assets/home/tablet/image-header.jpg" />

			<img src="/src/public/assets/home/mobile/image-header.jpg" alt="" class="w-full" />
		</picture>
	</section> -->
</section>

<style lang="postcss">
	.hero {
		background-image: url('/src/public/assets/home/mobile/image-header.jpg');
		background-repeat: no-repeat;
		/* background-size: contain; */
		background-size: 100%;
		background-position: center top;
	}
</style>
