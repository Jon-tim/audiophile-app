import data from '../../../data/data.json';

export function load({ params }) {
	const single = data.filter(
		(curr) => curr.slug === params.product
	);

	return { single };
}
