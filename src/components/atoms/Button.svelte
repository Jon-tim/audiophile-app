<script>
	export let bgcolor;
	export let textcolor;
	export let fn;
	export let border;
</script>

<a
	href={fn}
	class="bg-{bgcolor} border-2 border-{border} cursor-pointer transition duration-200 ease-linear text-{textcolor} uppercase font-bold px-6 py-3 hover:bg-dark hover:border-white hover:text-white text-center"
	on:click={fn}
>
	<slot />
</a>
