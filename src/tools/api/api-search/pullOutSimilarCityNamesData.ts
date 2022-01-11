import { SimilarCityName, SimilarCityNames } from '../../../store/searchReducer/models';

export const pullOutSimilarCityNamesData = ({ data }: any): SimilarCityNames => {
	if (!data.length) return [];

	const firstFiveCities = data.slice(0, 5);

	const result: SimilarCityNames = firstFiveCities.map(
		({ name, country }: any): SimilarCityName => ({
			country,
			cityName: name,
		})
	);

	return result;
};
