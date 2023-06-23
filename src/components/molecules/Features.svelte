<script>
	import Button from '../atoms/Button.svelte';
	import BestGear from './BestGear.svelte';
</script>

<section class="px-6 pb-8 flex flex-col gap-6 mx-auto max-w-5xl md:px-10 lg:px-0 lg:gap-10">
	<div
		class="bg-browns big card flex flex-col gap-14 px-6 py-16 items-center justify-between md:gap-20 lg:flex-row lg:px-16 lg:py-8"
	>
		<div class="w-[65%] md:w-1/3 lg:w-2/5 lg:translate-y-11">
			<picture class="">
				<source
					media="(min-width: 1024px)"
					class=""
					srcset="/src/public/assets/home/desktop/image-speaker-zx9.png"
				/>
				<source
					media="(min-width: 768px)"
					srcset="/src/public/assets/home/tablet/image-speaker-zx9.png"
				/>
				<img src="/src/public/assets/home/mobile/image-speaker-zx9.png" alt="" class="w-full" />
			</picture>
		</div>
		<div
			class="flex flex-col gap-8 items-center text-center md:w-3/5 lg:items-start lg:w-1/2 lg:text-left lg:gap-6 lg:px-16"
		>
			<h1 class="uppercase text-white font-semibold text-5xl md:text-6xl">zx9 speaker</h1>
			<p class="text-white">
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
			</p>
			<Button bgcolor="dark" textcolor="white" fn={null} border="dark">see product</Button>
		</div>
	</div>
	<div
		class="mid card h-[300px] flex flex-col gap-6 p-6 items-start justify-center md:px-14 lg:pl-16"
	>
		<h1 class="uppercase font-semibold text-3xl md:text-4xl">zx7 speaker</h1>
		<Button bgcolor="transparent" textcolor="dark" fn={null} border="dark">see product</Button>
	</div>
	<div class=" flex flex-col gap-6 mb-20 md:flex-row lg:">
		<div class="card h-[200px] md:h-[300px] md:w-1/2">
			<picture class="">
				<source
					media="(min-width: 1024px)"
					class=""
					srcset="/src/public/assets/home/desktop/image-earphones-yx1.jpg"
				/>
				<source
					media="(min-width: 768px)"
					srcset="/src/public/assets/home/tablet/image-earphones-yx1.jpg"
				/>
				<img
					src="/src/public/assets/home/mobile/image-earphones-yx1.jpg"
					alt=""
					class="w-full h-full object-cover"
				/>
			</picture>
		</div>
		<div
			class="card bg-black/5 p-6 h-[200px] flex flex-col items-start justify-center gap-6 md:h-[300px] md:w-1/2 lg:pl-16"
		>
			<h1 class="uppercase font-semibold text-3xl md:text-4xl">yx1 earphones</h1>
			<Button bgcolor="transparent" textcolor="dark" fn={null} border="dark">see product</Button>
		</div>
	</div>
	<BestGear />
</section>

<style lang="postcss">
	.card {
		border-radius: 1rem;
		overflow: hidden;
	}
	.mid {
		background-image: url('/src/public/assets/home/mobile/image-speaker-zx7.jpg');
		background-repeat: no-repeat;
		background-size: cover;
	}
	.big {
		background-image: url('/src/public/assets/home/desktop/pattern-circles.svg');
		background-repeat: no-repeat;
		background-size: 200%;
		background-position: center -120px;
	}

	@media screen and (min-width: 768px) {
		.mid {
			background-image: url('/src/public/assets/home/tablet/image-speaker-zx7.jpg');
		}
	}
	@media screen and (min-width: 1024px) {
		.mid {
			background-image: url('/src/public/assets/home/desktop/image-speaker-zx7.jpg');
		}

		.big {
			background-size: 60%;
			background-position: left center;
		}
	}
</style>
