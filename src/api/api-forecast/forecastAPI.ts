import { pullOutTodayForecastData } from '../../tools/api/api-forecast/pullOutTodayForecastData';
import { baseInstance } from '../instances';

class ForecastAPI {
	private successfulResponse({ data }: any) {
		const pullOutedTodayForecastData = pullOutTodayForecastData(data);
		return pullOutedTodayForecastData;
	}

	getTodayForecastByCityName(cityName: string) {
		const response = baseInstance.get(`/forecast.json?q=${cityName}`);
		const result = response.then(this.successfulResponse);
		return result;
	}
}

export const forecastAPI = new ForecastAPI();
