import data from '../../data/data.json';

export function load({ params }) {
	const products = data.filter((curr) => curr.category === params.slug);
	return { products };
}
