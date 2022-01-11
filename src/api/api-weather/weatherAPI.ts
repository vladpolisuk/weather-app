import { pullOutGeolocationData } from '../../tools/api/api-weather/pullOutGeolocationData';
import { pullOutWallpaperData } from '../../tools/api/api-weather/pullOutWallpaperData';
import { pullOutWeatherData } from '../../tools/api/api-weather/pullOutWeatherData';
import { getRandomCityName } from '../../tools/api/getRandomCityName';
import { baseInstance, geocodeInstanse, weatherWallpaperInstance } from '../instances';

class WeatherAPI {
	async getRandomWeather() {
		const randomCity = getRandomCityName();
		return this.getWeatherByCityName(randomCity);
	}

	async getWeatherByCityName(cityName: string) {
		const loweredCityName = cityName.toLowerCase();
		const response = baseInstance.get(`/current.json?q=${loweredCityName}`);
		const result = await response.then(pullOutWeatherData).catch(() => '404 Not Found');
		return result;
	}

	async getGeolocationByCoords(latitude: number, longitude: number) {
		const response = await geocodeInstanse.get(`/reverse.php?lat=${latitude}&lon=${longitude}`);
		const result = pullOutGeolocationData(response);
		return result;
	}

	async getUrlOfWallpaper(wallpaperName: string, cityName: string) {
		const keyWord = wallpaperName.toLowerCase();
		const location = cityName.toLowerCase();
		const response = await weatherWallpaperInstance.get(`?${keyWord},${location}`);
		const result = pullOutWallpaperData(response);
		return result;
	}
}

export const weatherAPI = new WeatherAPI();
