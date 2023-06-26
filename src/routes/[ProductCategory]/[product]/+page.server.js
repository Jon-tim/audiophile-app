import data from '../../../data/data.json';

export function load({ params }) {
	// console.log(params.product);
	const single = data.filter((curr) => {
		return curr.slug === params.product;
		// console.log(curr.slug);
		// console.log(params.product);
	});

	return { single };
}
