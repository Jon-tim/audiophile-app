<script>
	import { nav_links } from '../../data/nav_links';
	import AuxLinks from '../atoms/Aux_links.svelte';
	let navs = nav_links.slice(1);
</script>

<div class="py-6 px-6 w-full h-full flex flex-col items-center gap-20 md:flex-row md:gap-2 md:px-8 lg:px-0 lg:gap-6">
	{#each navs as nav (nav.id)}
		<AuxLinks url={nav.url} src={nav.src} name={nav.name} />
	{/each}
</div>
