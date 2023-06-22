<script>
	import Button from '../atoms/Button.svelte';
</script>

<section class="px-6 pb-8 flex flex-col gap-6">
	<div class="bg-browns big card flex flex-col gap-14 px-6 py-16 items-center justify-between">
		<div class="w-[65%]">
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
		<div class="flex flex-col gap-8 items-center text-center">
			<h1 class="uppercase text-white font-semibold text-5xl">zx9 speaker</h1>
			<p class="text-white">
				Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
			</p>
			<Button bgcolor="dark" textcolor="white" fn={null} border="dark">see product</Button>
		</div>
	</div>
	<div class="mid card h-[300px] flex flex-col gap-6 p-6 items-start justify-center">
		<h1 class="uppercase font-semibold text-3xl">zx7 speaker</h1>
		<Button bgcolor="transparent" textcolor="dark" fn={null} border="dark">see product</Button>
	</div>
	<div class=" flex flex-col gap-6">
		<div class="card h-[200px]">
			<picture>
				<source
					media="(min-width: 1024px)"
					class=""
					srcset="/src/public/assets/home/desktop/image-earphones-yx1.jpg"
				/>
				<source
					media="(min-width: 768px)"
					srcset="/src/public/assets/home/tablet/image-earphones-yx1.jpg"
				/>
				<img src="/src/public/assets/home/mobile/image-earphones-yx1.jpg" alt="" class="" />
			</picture>
		</div>
		<div class="card bg-black/5 p-6 h-[200px] flex flex-col items-start justify-center gap-6">
			<h1 class="uppercase font-semibold text-3xl">yx1 earphones</h1>
			<Button bgcolor="transparent" textcolor="dark" fn={null} border="dark">see product</Button>
		</div>
	</div>
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
</style>
