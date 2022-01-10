import { pullOutThreeDayForecastData } from '../../tools/api/api-forecast/pullOutThreeDayForecastData';
import { pullOutTodayForecastData } from '../../tools/api/api-forecast/pullOutTodayForecastData';
import { baseInstance } from '../instances';

class ForecastAPI {
	async getTodayForecastByCityName(cityName: string) {
		const response = baseInstance.get(`/forecast.json?q=${cityName}`);
		const result = response.then(pullOutTodayForecastData);
		return result;
	}

	async getThreeDayForecast(cityName: string) {
		const response = baseInstance.get(`/forecast.json?q=${cityName}&days=3`);
		const result = response.then(pullOutThreeDayForecastData);
		return result;
	}
}

export const forecastAPI = new ForecastAPI();
