<script>
	export let title;
	export let details;
</script>

<div class="flex items-center justify-between">
	<p class="uppercase">{title}</p>
	<p class="font-bold text-lg text-dark">
		$ {details}
	</p>
</div>
