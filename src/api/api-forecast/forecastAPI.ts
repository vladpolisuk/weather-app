import { pullOutThreeDayForecastData } from '../../tools/api/api-forecast/pullOutThreeDayForecastData';
import { pullOutTodayForecastData } from '../../tools/api/api-forecast/pullOutTodayForecastData';
import { baseInstance } from '../instances';

class ForecastAPI {
	async getTodayForecastByCityName(cityName: string) {
		const response = await baseInstance.get(`/forecast.json?q=${cityName}`);
		const result = pullOutTodayForecastData(response);
		return result;
	}

	async getThreeDayForecast(cityName: string) {
		const response = await baseInstance.get(`/forecast.json?q=${cityName}&days=3`);
		const result = pullOutThreeDayForecastData(response);
		return result;
	}
}

export const forecastAPI = new ForecastAPI();
