import { pullOutWeatherData } from '../../tools/api/api-weather/pullOutWeatherData';
import { getRandomCityName } from '../../tools/api/getRandomCityName';
import { baseInstance, weatherWallpaperInstance } from '../instances';

class WeatherAPI {
	async getRandomWeather() {
		const randomCity = getRandomCityName();
		return this.getWeatherByCityName(randomCity);
	}

	async getWeatherByCityName(cityName: string) {
		const response = baseInstance.get(`/current.json?q=${cityName}`);
		const result = response.then(pullOutWeatherData).catch(() => '404 Not Found');
		return result;
	}

	async getUrlOfWallpaper(wallpaperName: string, cityName: string) {
		const keyWord = wallpaperName.toLowerCase();
		const location = cityName.toLowerCase();
		const response = await weatherWallpaperInstance.get(`?${keyWord},${location}`);
		return response.request.responseURL;
	}
}

export const weatherAPI = new WeatherAPI();
