<script>
	import { nav_links } from '../../data/nav_links';
	import { toggler } from '../../store/store';
	import AuxLinkHolder from './Aux_Link_Holder.svelte';
	let navs = nav_links.slice(1);
</script>

<section
	class={`absolute top-full left-0 bg-white w-full z-50 py-10 pb-24 h-screen overflow-scroll  ${
		$toggler ? '' : '-translate-x-full'
	} transition-transform duration-300 ease-linear lg:hidden `}
>
	<AuxLinkHolder />
	<!-- <div class="overlay bg-white" /> -->
</section>
