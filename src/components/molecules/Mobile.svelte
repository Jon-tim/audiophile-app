<script>
	import AuxLinks from '../atoms/Aux_links.svelte';
	import { nav_links } from '../../data/nav_links';
	import { toggler } from '../../store/store';
	import AuxLinkHolder from './Aux_Link_Holder.svelte';
	let navs = nav_links.slice(1);
</script>

<section
	class={`absolute top-full left-0 bg-white w-full overflow-yhidden z-50 py-10 ${
		$toggler ? '' : '-translate-x-full'
	} transition-transform duration-300 ease-linear h-scree`}
>
	<AuxLinkHolder />
	<div class="overlay overflow-hidden w-screen h-screen bg-white" />
</section>
