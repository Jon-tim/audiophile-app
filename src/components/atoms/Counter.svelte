<script>
	// import { quantity } from '../../store/carts';
	export let quantity;
	export let increase;
	export let decrease;

	$: quant = quantity;
</script>

<div class={`bg-black/5 h-full w-max flex items-center`}>
	<span
		class="px-3 h-full flex items-center justify-center cursor-pointer text-xl font-bold text-text hover:text-white hover:bg-browns transition-all duration-200"
		on:click={increase}
		on:keydown={increase}>+</span
	>
	<span
		class="border-x-2 h-full flex items-center justify-center w-10 font-semibold text-sm text-text"
		>{quant}</span
	>
	<span
		on:click={decrease}
		on:keydown={decrease}
		class="px-3 h-full flex items-center justify-center cursor-pointer text-xl font-bold text-text hover:text-white hover:bg-browns transition-all duration-200"
		>-</span
	>
</div>
