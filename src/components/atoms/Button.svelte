<script>
	//bg-color
	//text-color
	//fn

	export let bgcolor;
	export let textcolor;
	export let fn;
	export let border;
</script>

<a
	href={fn}
	class={`bg-${bgcolor} border-2 border-${border} cursor-pointer text-${textcolor} uppercase font-bold px-6 py-3`}
	on:click={fn}
>
	<slot />
</a>
