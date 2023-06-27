<script>
	export let data;
	import { page } from '$app/stores';
	import { each } from 'svelte/internal';
	import Others from '../../../components/atoms/Others.svelte';

	$: single = data.single;
	let quantity = 1;
</script>

<section class="">
	<section class="flex flex-col gap-20 md:mb-12">
		{#each single as item}
			<div class="flex flex-col gap-8 xs:flex-row sm:items-center lg:gap-12">
				<div class="rounded-xl overflow-hidden xs:w-1/3 md:w-2/5  lg:w-1/2">
					<picture>
						<source srcset={item.image.desktop} media="(min-width: 1024px)" />
						<source srcset={item.image.tablet} media="(min-width: 540px)" />
						<img class="w-full h-full object-cover" src={item.image.mobile} alt={`image of ${item.name}`} />
					</picture>
				</div>
				<div class="flex flex-col gap-4 xs:w-2/3 md:w-3/5 lg:w-1/2">
					{#if item.new}
						<p class="uppercase text-browns tracking-[.5rem] text-sm">new product</p>
					{/if}
					<h1 class="text-3xl uppercase font-bold w-2/3">{item.name}</h1>
					<p>{item.description}</p>
					<p class="text-browns text-lg font-semibold">
						{`$${item.price.toLocaleString('en-US', {
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}`}
					</p>
					<div class="flex items-center gap-6 flex-wrap">
						<div class="bg-black/5 w-max h-[48px] flex items-center">
							<span
								class="px-6 h-full flex items-center justify-center cursor-pointer text-xl font-bold text-text hover:text-white hover:bg-browns transition-all duration-200"
								>+</span
							>
							<span
								class="border-x-2 h-full flex items-center justify-center w-12 font-semibold text-text"
								>{quantity}</span
							>
							<span
								class="px-6 h-full flex items-center justify-center cursor-pointer text-xl font-bold text-text hover:text-white hover:bg-browns transition-all duration-200"
								>-</span
							>
						</div>
						<button class="px-6 py-3 bg-browns text-white font-bold uppercase">add to cart</button>
					</div>
				</div>
			</div>
			<div class="flex flex-col gap-10 lg:flex-row lg:justify-between">
				<div class="lg:w-2/3">
					<h1 class="text-2xl uppercase font-bold mb-4">features</h1>
					<p class="">{@html item.features}</p>
				</div>
				<div>
					<h1 class="text-2xl uppercase font-bold mb-4">in the box</h1>
					<div>
						{#each item.includes as details, id (id)}
							<p class=" font-semibold">
								<span class="text-browns mr-4">{details.quantity}x</span>
								{details.item}
							</p>
						{/each}
					</div>
				</div>
			</div>
			<!-- gallery -->
			<section class="flex flex-col gap-6 min-[480px]:flex-row min-[480px]:gap-4">
				<div class="flex flex-col gap-6 min-[480px]:gap-4 sm:w-2/5">
					<div class="rounded-xl overflow-hidden h-full">
						<picture>
							<source
								media="(min-width: 1024px)
							
							"
								srcset={item.gallery.first.desktop}
							/>
							<source
								media="(min-width: 768px)
							
							"
								srcset={item.gallery.first.tablet}
							/>
							<img class="w-full h-full object-cover" src={item.gallery.first.mobile} alt="" />
						</picture>
					</div>
					<div class="rounded-xl overflow-hidden h-full">
						<picture>
							<source
								media="(min-width: 1024px)
							
							"
								srcset={item.gallery.second.desktop}
							/>
							<source
								media="(min-width: 768px)
							
							"
								srcset={item.gallery.second.tablet}
							/>
							<img class=" object-cover w-full h-full" src={item.gallery.second.mobile} alt="" />
						</picture>
					</div>
				</div>
				<div class="rounded-xl overflow-hidden sm:w-3/5">
					<picture>
						<source
							media="(min-width: 1024px)
							
							"
							srcset={item.gallery.third.desktop}
						/>
						<source
							media="(min-width: 768px)
							
							"
							srcset={item.gallery.third.tablet}
						/>
						<img class="w-full h-full object-cover" src={item.gallery.third.mobile} alt="" />
					</picture>
				</div>
			</section>
			<!-- others -->
			<div class="flex flex-col gap-10 lg:mt-6">
				<h1 class="uppercase font-bold text-2xl text-center md:text-4xl">you may also like</h1>
				<div class="flex flex-col gap-10 md:flex-row">
					{#each item.others as other, id (id)}
						<Others name={other.name} image={other.image} link={other.slug} />
					{/each}
				</div>
			</div>
		{/each}
	</section>
</section>
