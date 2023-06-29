<script>
	import Modal from './Cart.svelte';
	import { modalToggle } from '../../store/cartModalStore';
	import Cart from './Cart.svelte';
</script>

<section class="absolute z-10 right-0 left-0 h-screen overflow-hidden w-full top-0 px-10 sm:px-10">
	<div
		class="bg-black/50 absolute right-0 top-0 w-screen h-screen"
		on:click={modalToggle}
		on:keypress={modalToggle}
	/>
	<div
		class="bg-white right-0 mx-auto  max-w-[350px] translate-y-28 h-max rounded-xl p-6 min-[540px]:absolute min-[540px]:w-[400px] min-[540px]:right-10 md:w-[800px]"
	>
		<Cart />
	</div>
</section>
