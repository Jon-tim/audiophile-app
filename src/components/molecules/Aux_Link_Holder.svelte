<script>
	import { nav_links } from '../../data/nav_links';
	import AuxLinks from '../atoms/Aux_links.svelte';
	let navs = nav_links.slice(1);
</script>

<div class="p-6 w-full h-full flex flex-col items-center gap-20 md:flex-row md:px-10 md:gap-2">
	{#each navs as nav (nav.id)}
		<AuxLinks url={nav.url} src={nav.src} name={nav.name} />
	{/each}
</div>
