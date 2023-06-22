<script>
	import { page, navigating } from '$app/stores';
	import { nav_links } from '../../data/nav_links';
	// console.log($page.route.id);
</script>

<section class="hidden lg:block">
	<ul class="flex gap-8">
		{#each nav_links as link (link.id)}
			<li
				class="cursor-pointer hover:text-browns transition-all duration-200 ease-linear text-white uppercase text-sm font-semibold"
			>
				<a href={link.url}>{link.name}</a>
			</li>
		{/each}
	</ul>
</section>
