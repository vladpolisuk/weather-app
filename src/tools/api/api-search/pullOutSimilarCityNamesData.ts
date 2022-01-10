import { SimilarCityName, SimilarCityNames } from '../../../store/searchReducer/models';

export const pullOutSimilarCityNamesData = ({ data }: any): SimilarCityNames => {
	if (data.length) {
		const firstFourCities = data.slice(0, 4);

		const result: SimilarCityNames = firstFourCities.map(({ name, country }: any): SimilarCityName => {
			return {
				country,
				cityName: name,
			};
		});

		return result;
	} else return [];
};
