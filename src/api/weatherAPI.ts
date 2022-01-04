import { initialState } from '../store/weatherReducer/reducer';
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

	private rejectedResponse(error: any) {
		const message = error.response.data.error.message;
		return { ...initialState, error: message };
	}

	private successfulResponse({ data }: any) {
		const pullOutedWeatherData = pullOutWeatherData(data);
		return pullOutedWeatherData;
	}

	async getRandomWeather() {
		const randomCity = getRandomCityName();
		return this.getWeatherByCityName(randomCity);
	}

	async getWeatherByCityName(cityName: string) {
		const requestString = this.withAPIKEY(`/current.json?q=${cityName}`);
		const response = weatherInstance.get(requestString);
		const result = response.then(this.successfulResponse).catch(this.rejectedResponse);
		return result;
	}

	async getUrlOfWallpaper(wallpaperName: string, cityName: string) {
		const {
			request: { responseURL },
		} = await weatherWallpaperInstance.get(`?${wallpaperName.toLowerCase()},${cityName}`);
		return responseURL;
	}
}

export const weatherAPI = new WeatherAPI(API_KEY);
