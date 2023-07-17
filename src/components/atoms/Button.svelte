<script>
	export let bgcolor;
	export let textcolor;
	export let fn;
	export let borderSize;
	export let borderColor;
</script>

<a
	href={fn}
	class={`bg-${bgcolor} border-${borderSize} border-${borderColor} cursor-pointer transition duration-200 ease-linear text-${textcolor} uppercase font-bold px-6 py-3 text-center`}
	on:click={fn}
>
	<slot />
</a>
