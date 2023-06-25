import data from '../../data/data.json';

export function load({ params }) {
	const getCategory = () => {
		const category = data.filter((curr) => curr.category == params.slug);

		return category;
	};
	return {
		products: getCategory()
	};
}
