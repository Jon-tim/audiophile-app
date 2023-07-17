<script>
	import CardCheckout from '../atoms/Card_checkout.svelte';
	import FormField from '../atoms/FormField.svelte';
	import { shipping, billing } from '../../data/Form_info';
	import { onMount } from 'svelte';
	import PaymentMethod from '../atoms/PaymentMethod.svelte';
	//-------------------------------------------------------------------

	// let radios = {};

	// function handleClick() {
	// 	console.log(radios.childNodes.length);
	// 	// Get the number of radio elements
	// 	console.log(radios); // Get the array of radio elements
	// }
	// // handleClick();
	// const payments = [
	// 	{
	// 		id: 1,
	// 		method: 'cash on delivery',
	// 		idRef: 'cash'
	// 	},
	// 	{
	// 		id: 2,
	// 		method: 'e-money',
	// 		idRef: 'electronic'
	// 	}
	// ];
	let selected = 'cash';
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
			<section>
				<legend class="text-browns">payment details</legend>
				<section class="flex flex-col gap-4 w-full md:flex-row mb-4">
					<h1 class="payment md:w-1/2">payment method</h1>
					<div class="flex flex-col gap-4 mb-4 w-full payment-choice md:w-1/2">
						<div class="radio-parent">
							<input
								type="radio"
								id="emoney"
								name="payment"
								bind:group={selected}
								value="money"
								checked
							/>
							<label for="emoney">e-Money</label>
						</div>

						<div class="radio-parent">
							<input type="radio" id="cash" name="payment" value="cash" bind:group={selected} />
							<label for="cash">Cash on Delivery</label>
						</div>
					</div>
				</section>
				<div>
					{#if selected == 'money'}
						<div class="money-choice flex flex-col gap-4 md:flex-row w-full">
							<div class="form-field w-full">
								<label for="emoney">e-Money Number</label>
								<input
									type="text"
									id="emoney"
									name="emoney"
									placeholder="0123456789"
									class="border-black/20 border-[1px]"
								/>
							</div>
							<div class="form-field w-full">
								<label for="emoney">e-Money Pin</label>
								<input
									type="text"
									placeholder="1234"
									id="emoney"
									name="emoney"
									class="border-black/20 border-[1px]"
								/>
							</div>
						</div>
					{:else}
						<div class="COD flex items-center gap-8">
							<img src="/public/assets/shared/desktop/icon-cash-on-delivery.svg" alt="" />
							<p class="text-sm md:text-base">
								The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier
								arrives at your residence. Just make sure your address is correct so that your order
								will not be cancelled.
							</p>
						</div>
					{/if}
				</div>
			</section>
		</form>
	</CardCheckout>
</section>

<style>
	.payment {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.78rem;
	}

	.radio-parent {
		width: 100%;
		background: transparent;
		border: 1px solid hwb(0 0% 100% / 0.2);
		border-radius: 0.5rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0rem 1.2rem;
		height: 50px;
	}

	.radio-parent label {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.78rem;
	}
	.form-field {
		position: relative;
	}
	.form-field input {
		width: 100%;
		font-size: 0.9rem;
		background: transparent;
		outline: none;
		padding: 0.8rem 1.2rem;
		/* border: 1px solid hwb(0 0% 100% / 0.2); */
		border-radius: 0.5rem;
	}

	.form-field label {
		display: block;
		width: max-content;
		margin-bottom: 0.5rem;
	}

	.form-field label,
	.form-field input::placeholder {
		text-transform: capitalize;
		font-weight: 600;
		font-size: 0.78rem;
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
