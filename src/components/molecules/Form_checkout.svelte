<script>
	import CardCheckout from '../atoms/Card_checkout.svelte';
	import FormField from '../atoms/FormField.svelte';
	import { shipping, billing } from '../../data/Form_info';
</script>

<section class="md:w-[70%]">
	<CardCheckout>
		<h1 class="text-2xl font-bold uppercase md:text-3xl">checkout</h1>
		<form action="">
			<fieldset>
				<legend class="text-browns">billing details</legend>
				{#each billing as form (form.id)}
					<div class="form-field">
						<FormField
							forId={form.for}
							placeholder={form.placeholder}
							label={form.label}
							errorMsg={form.error}
						/>
					</div>
				{/each}
			</fieldset>
			<fieldset>
				<legend class="text-browns">shipping info</legend>
				{#each shipping as form, id (form.id)}
					<div class="form-field">
						<FormField
							forId={form.for}
							placeholder={form.placeholder}
							label={form.label}
							errorMsg={form.error}
						/>
					</div>
				{/each}
			</fieldset>
		</form>
	</CardCheckout>
</section>

<style>
	.form-field {
		position: relative;
	}
	fieldset {
		display: grid;
		gap: 1rem;
		margin-bottom: 1rem;
	}

	legend {
		font-size: 0.875rem;
		text-transform: uppercase;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	@media screen and (min-width: 620px) {
		fieldset {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			column-gap: 1rem;
		}
		fieldset:last-of-type div:first-of-type {
			grid-column: 1/3;
		}
	}
</style>
