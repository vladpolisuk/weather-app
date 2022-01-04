import { weatherAPI } from '../../api/weatherAPI';
import { AppThunkDispatch, ThunkType } from '../models';
import { WeatherActions, weatherActions, WeatherActionsType } from './actions';
import { WeatherReducer, WeatherState, WeatherType } from './models';

export const initialState: WeatherState = {
	error: '',
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

const setWeatherData = (dispatch: AppThunkDispatch<WeatherActionsType>, weatherData: WeatherType) => {
	dispatch(weatherActions.setWeatherData(weatherData));
	const city = weatherData.shortRegion.split('/')[1];
	dispatch(getWeatherWallpaper(weatherData.shortWeather, city));
};

export const getRandomWeatherData = (): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		const randomWeatherData = await weatherAPI.getRandomWeather();
		setWeatherData(dispatch, randomWeatherData);
	};
};

export const getWeatherByCityName = (cityName: string): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		const weatherData = await weatherAPI.getWeatherByCityName(cityName);
		setWeatherData(dispatch, weatherData);
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
