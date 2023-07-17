<script>
	import Button from '../atoms/Button.svelte';
</script>

<section class="hero grid grid-cols-1 grid-rows-1 items-center w-full relative lg:-translate-y-20">
	<div class="p-6 col-start-1 row-start-1 lg:px-0 max-w-5xl relative z-10">
		<div
			class=" mx-auto flex gap-3 flex-col items-center text-center w-[90%] md:w-2/3 md:gap-6 lg:items-start lg:text-left"
		>
			<p class="uppercase text-white/50 text-xs font-semibold tracking-[.7rem] md:text-base">
				new product
			</p>
			<h1 class="uppercase text-[2.5rem] text-white font-extrabold md:text-6xl">
				xx99 mark ii headphone
			</h1>
			<p class="text-white/80 mb-6 text-base w-[85%] md:mb-3 lg:w-[380px]">
				Experience natural, lifelike audio and exceptional build quality made for the passionate
				music enthusiast.
			</p>
			<Button
				bgcolor="browns"
				border="browns"
				textcolor="white"
				fn="/headphones/xx99-mark-two-headphones">see product</Button
			>
		</div>
	</div>
	<section class=" col-start-1 row-start-1 h-full w-full">
		<picture class="w-full h-full">
			<source
				media="(min-width: 1024px)"
				class=""
				srcset="public/assets/home/desktop/image-hero.jpg"
			/>
			<source media="(min-width: 768px)" srcset="public/assets/home/tablet/image-header.jpg" />

			<img src="public/assets/home/mobile/image-header.jpg" alt="" class="w-full" />
		</picture>
	</section>
</section>

<style lang="postcss"></style>
