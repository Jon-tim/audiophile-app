<script>
	import AuxLinks from '../atoms/Aux_links.svelte';
	import { nav_links } from '../../data/nav_links';
	import { toggler } from '../../store/store';
	let navs = nav_links.slice(1);
</script>

<section
	class={`absolute top-full left-0 bg-white w-full overflow-y-hidden z-50 py-10 ${
		$toggler ? '' : '-translate-x-full'
	} transition-transform duration-300 ease-linear`}
>
	<div class="p-6 h-full flex flex-col gap-20">
		{#each navs as nav (nav.id)}
			<AuxLinks url={nav.url} src={nav.src} name={nav.name} />
		{/each}
	</div>

	<!-- <div class="overlay" /> -->
</section>
