<script>
	export let forId;
	export let label;
	export let placeholder;
	export let errorMsg;

	let error = false;
	let inputElement;
	function handleInput() {
		if (inputElement.value.trim() === '') {
			error = true;
		} else {
			error = false;
		}
	}
</script>

<label for={forId}>{label} </label>
<input
	type={forId === 'email' ? 'email' : 'text'}
	name={forId}
	{placeholder}
	on:input={handleInput}
	bind:this={inputElement}
	class={error ? 'border-red-500 border-[1px]' : 'border-black/20 border-[1px]'}
/>
{#if error}
	<p class="error-message">{errorMsg}</p>
{/if}

<style>
	label {
		display: block;
		width: max-content;
		margin-bottom: 0.5rem;
	}

	input {
		width: 100%;
		font-size: 0.9rem;
		background: transparent;
		outline: none;
		padding: 0.8rem 1.2rem;
		/* border: 1px solid hwb(0 0% 100% / 0.2); */
		border-radius: 0.5rem;
	}

	input:focus {
		border: 1px solid #d87d4a;
		outline: none;
	}

	input:not(last-of-type) {
		margin-bottom: 1rem;
	}

	label,
	input::placeholder {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.78rem;
	}

	.error-message {
		position: absolute;
		right: 0;
		top: 0;
		color: red;
		font-size: 0.78rem;
	}
</style>
