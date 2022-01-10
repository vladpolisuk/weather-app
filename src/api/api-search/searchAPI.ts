import { pullOutSimilarCityNamesData } from '../../tools/api/api-search/pullOutSimilarCityNamesData';
import { baseInstance } from '../instances';

class SearchAPI {
	async getSimilarCityNamesByCityName(cityName: string) {
		const response = baseInstance.get(`/search.json?q=${cityName}`);
		const result = response.then(pullOutSimilarCityNamesData);
		return result;
	}
}

export const searchAPI = new SearchAPI();
