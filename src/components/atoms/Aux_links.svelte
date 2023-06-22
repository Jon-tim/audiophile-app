<script>
	import { toggler } from '../../store/store';

	export let name;
	export let url;
	export let src;

	function closeNav() {
		if ($toggler) {
			toggler.toggleMenu();
		}
	}
</script>

<a href={url} class="group block" on:click={closeNav}>
	<div class=" flex flex-col items-center bg-black/5 rounded-xl h-36 relative">
		<img {src} alt={name} class="w-32 absolute -top-12" />

		<div class="flex items-center flex-col h-full justify-end pb-4">
			<h3 class="uppercase font-semibold">{name}</h3>
			<p class="uppercase text-sm flex items-center group-hover:text-browns font-semibold">
				shop
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						class="fill-browns group-hover:translate-x-1 transition-all duration-200 ease-linear"
						><path
							d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"
						/></svg
					>
				</span>
			</p>
		</div>
	</div>
</a>
