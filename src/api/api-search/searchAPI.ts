import { pullOutSimilarCityNamesData } from '../../tools/api/api-search/pullOutSimilarCityNamesData';
import { baseInstance } from '../instances';

class SearchAPI {
	async getSimilarCityNamesByCityName(cityName: string) {
		const response = baseInstance.get(`/search.json?q=${cityName}`);
		const result = await response.then(pullOutSimilarCityNamesData);
		if (result.length) return result;
		else return 'Nothing found';
	}
}

export const searchAPI = new SearchAPI();
