import { getRandomCityName } from '../tools/api/getRandomCityName';
import { pullOutWeatherData } from '../tools/api/pullOutWeatherData';
import { API_KEY, weatherInstance, weatherWallpaperInstance } from './instance';

class WeatherAPI {
	API_KEY: string;

	constructor(apikey: string) {
		this.API_KEY = apikey;
	}

	private withAPIKEY(string: string) {
		return `${string}&key=${this.API_KEY}`;
	}

	async getRandomWeather() {
		const randomCity = getRandomCityName();
		return this.getWeatherByCityName(randomCity);
	}

	async getWeatherByCityName(cityName: string) {
		const requestString = this.withAPIKEY(`/current.json?q=${cityName}`);
		const { data } = await weatherInstance.get(requestString);
		const pullOutedWeatherData = pullOutWeatherData(data);
		return pullOutedWeatherData;
	}

	async getUrlOfWallpaper(wallpaperName: string, cityName: string) {
		const {
			request: { responseURL },
		} = await weatherWallpaperInstance.get(`?${wallpaperName.toLowerCase()},${cityName}`);
		return responseURL;
	}
}

export const weatherAPI = new WeatherAPI(API_KEY);
