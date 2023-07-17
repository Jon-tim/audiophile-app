<script>
	import Logo from '../atoms/Logo.svelte';
	import DesktopNavLinks from '../atoms/DesktopNavLinks.svelte';
	import Mobile from './Mobile.svelte';
	import { toggler } from '../../store/store';
	import CartModal from './CartModal.svelte';
	import { modalToggle, modalOpen } from '../../store/cartModalStore';
	import { cart } from '../../store/carts';

	function handleKeyDown(event) {
		if (event.key === 'Enter' || event.key === 'Space') {
			// Handle the event (e.g., toggle the menu)
			// this is unlikely to be needed in desktop mode though, I think the button will be hidden already, but then, A11y errors are choking me
			toggler.toggleMenu();
		}
	}
</script>

<nav
	class="bg-dark px-6 md:px-10 lg:px-0 sticky w-full top-0 z-20 border-b-[1px] border-white/20 md:border-none"
>
	<Mobile />
	<section
		class=" max-w-5xl mx-auto flex items-center justify-between py-8 md:border-b-[1px] border-white/20 "
	>
		<!--hamburger/close menu svg -->
		<svg
			fill="#FFF"
			width="16"
			height="15"
			on:click={toggler.toggleMenu}
			on:keydown={handleKeyDown}
			xmlns="http://www.w3.org/2000/svg"
			class="cursor-pointer group lg:hidden"
			><g><path class="group-hover:fill-browns" d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" /></g
			></svg
		>
		<!-- logo -->
		<Logo />
		<DesktopNavLinks />
		<!-- cart svg -->
	
		<div class="w-max cursor-pointer group relative">
			<svg
				width="23"
				height="20"
				on:click={() => modalToggle()}
				on:keypress
				xmlns="http://www.w3.org/2000/svg"
				><path
					d="M8.625 15.833c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.054-.935-2.054-2.083 0-1.15.922-2.084 2.054-2.084zm9.857 0c1.132 0 2.054.935 2.054 2.084 0 1.148-.922 2.083-2.054 2.083-1.132 0-2.053-.935-2.053-2.083 0-1.15.92-2.084 2.053-2.084zm-9.857 1.39a.69.69 0 00-.685.694.69.69 0 00.685.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zm9.857 0a.69.69 0 00-.684.694.69.69 0 00.684.694.69.69 0 00.685-.694.69.69 0 00-.685-.695zM4.717 0c.316 0 .59.215.658.517l.481 2.122h16.47a.68.68 0 01.538.262c.127.166.168.38.11.579l-2.695 9.236a.672.672 0 01-.648.478H7.41a.667.667 0 00-.673.66c0 .364.303.66.674.66h12.219c.372 0 .674.295.674.66 0 .364-.302.66-.674.66H7.412c-1.115 0-2.021-.889-2.021-1.98 0-.812.502-1.511 1.218-1.816L4.176 1.32H.674A.667.667 0 010 .66C0 .296.302 0 .674 0zm16.716 3.958H6.156l1.797 7.917h11.17l2.31-7.917z"
					fill="#FFF"
					fill-rule="nonzero"
					class="group-hover:fill-browns transition-colors duration-200 ease-linear"
				/></svg
			>
			{#if $cart.totalQuantity > 0}
				<div
					class="p-1 rounded-full absolute -top-2 -left-2 bg-browns w-5 h-5 flex items-center justify-center"
				>
					<p class="text-white text-xs font-semibold">{$cart.totalQuantity}</p>
				</div>
			{/if}
		</div>
	</section>
</nav>
