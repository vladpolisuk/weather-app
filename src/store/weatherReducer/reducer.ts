import { weatherAPI } from '../../api/weatherAPI';
import { ThunkType } from '../models';
import { WeatherActions, weatherActions, WeatherActionsType } from './actions';
import { WeatherReducer } from './models';

export const initialState = {
	region: '',
	country: '',
	cityName: '',
	localDate: '',
	localTime: '',
	wallpaper: '',
	shortRegion: '',
	shortWeather: '',
	weatherIconUrl: '',
	lastUpdatedDate: '',
	lastUpdatedTime: '',
};

export const weatherReducer: WeatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WeatherActions.SET_WEATHER_DATA:
			return { ...state, ...action.payload };

		case WeatherActions.SET_WEATHER_WALLPAPER:
			return { ...state, wallpaper: action.payload };

		default:
			return state;
	}
};

export const getRandomWeatherData = (): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		const randomWeatherData = await weatherAPI.getRandomWeather();
		dispatch(weatherActions.setWeatherData(randomWeatherData));
		const city = randomWeatherData.shortRegion.split('/')[1];
		dispatch(getWeatherWallpaper(randomWeatherData.shortWeather, city));
	};
};

export const getWeatherByCityName = (cityName: string): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		const weatherData = await weatherAPI.getWeatherByCityName(cityName);
		dispatch(weatherActions.setWeatherData(weatherData));
		const city = weatherData.shortRegion.split('/')[1];
		dispatch(getWeatherWallpaper(weatherData.shortWeather, city));
	};
};

export const getWeatherWallpaper = (
	wallpaperName: string,
	cityName: string
): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		const weatherWallpaperUrl = await weatherAPI.getUrlOfWallpaper(wallpaperName, cityName);
		dispatch(weatherActions.setWeatherWallpaper(weatherWallpaperUrl));
	};
};
