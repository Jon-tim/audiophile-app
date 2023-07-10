<script>
	export let label;
</script>

<!-- <div class="border-black/20 border-[1px] radio-parent" {id}> -->
<span class="radio-ring" />
<p class="text-dark">{label}</p>

<!-- </div> -->

<style>
	p {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.78rem;
	}


	.radio-ring {
		border: 1px solid hwb(0 0% 100% / 0.2);
		width: 20px;
		height: 20px;
		border-radius: 50%;
		margin-right: 8px;
		position: relative;
	}

	.radio-ring::after {
		content: '';
		background-color: #d87d4a;
		position: absolute;
		width: 65%;
		height: 65%;
		border-radius: 50%;
		transform: translate(-50%, -50%);
		left: 50%;
		top: 50%;
	}
</style>
