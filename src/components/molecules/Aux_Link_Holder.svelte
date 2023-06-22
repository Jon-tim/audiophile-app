<script>
	import { nav_links } from '../../data/nav_links';
	import AuxLinks from '../atoms/Aux_links.svelte';
	let navs = nav_links.slice(1);
</script>

<div class="p-6 h-full flex flex-col gap-20">
	{#each navs as nav (nav.id)}
		<AuxLinks url={nav.url} src={nav.src} name={nav.name} />
	{/each}
</div>
