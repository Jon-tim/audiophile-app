<section class="max-w-5xl mx-auto px-6 py-8 md:px-10 lg:px-0">
	<button
		class="px-4 py-2 bg-black/5 rounded-md w-max cursor-pointer group"
		on:click={() => window.history.back()}
	>
		<p
			class="font-semibold capitalize group-hover:text-dark transition-colors duration-200 ease-linear"
		>
			go back
		</p>
	</button>
	<slot />
</section>
