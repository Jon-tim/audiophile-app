<script>
	import Button from '../atoms/Button.svelte';
</script>

<section class="hero grid grid-cols-1 grid-rows-1 items-center relative md:h-scree">
	<div
		class="col-start-1 row-start-1 flex gap-3 flex-col items-center text-center w-[90%] mx-auto relative z-10 p-6 md:w-2/3 md:gap-6"
	>
		<p class="uppercase text-white/50 text-xs font-semibold tracking-[.7rem] md:text-base">new product</p>
		<h1 class="uppercase text-[2.5rem] text-white font-extrabold md:text-6xl">xx99 mark ii headphone</h1>
		<p class="text-white/80 mb-6 text-base w-[85%] md:mb-3">
			Experience natural, lifelike audio and exceptional build quality made for the passionate music
			enthusiast.
		</p>
		<Button bgcolor="browns" border="browns" textcolor="white" fn={null}>see product</Button>
	</div>
	<section class=" col-start-1 row-start-1 h-full w-full">
		<picture class="w-full h-full">
			<source
				media="(min-width: 1024px)"
				class=""
				srcset="/src/public/assets/home/desktop/image-hero.jpg"
			/>
			<source media="(min-width: 768px)" srcset="/src/public/assets/home/tablet/image-header.jpg" />

			<img src="/src/public/assets/home/mobile/image-header.jpg" alt="" class="w-full" />
		</picture>
	</section>
</section>

<style lang="postcss"></style>
