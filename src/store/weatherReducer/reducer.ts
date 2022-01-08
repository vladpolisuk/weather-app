import { weatherAPI } from '../../api/api-weather/weatherAPI';
import { AppThunkDispatch, ThunkType } from '../models';
import { WeatherActions, weatherActions, WeatherActionsType } from './actions';
import { WeatherReducer, WeatherState, WeatherType } from './models';

export const initialState: WeatherState = {
	region: '',
	country: '',
	cityName: '',
	localDate: '',
	localTime: '',
	wallpaper: '',
	isLoaded: false,
	shortRegion: '',
	isLoading: false,
	shortWeather: '',
	weatherIconUrl: '',
	lastUpdatedDate: '',
	lastUpdatedTime: '',
	currentTemperatureC: 0,
};

export const weatherReducer: WeatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case WeatherActions.SET_WEATHER_DATA:
			return { ...state, ...action.payload };

		case WeatherActions.SET_WEATHER_WALLPAPER:
			return { ...state, wallpaper: action.payload };

		case WeatherActions.SET_IS_LOADED:
			return { ...state, isLoaded: action.payload };

		case WeatherActions.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };

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
		dispatch(weatherActions.setWeatherIsLoading(true));
		const randomWeatherData = await weatherAPI.getRandomWeather();
		setWeatherData(dispatch, randomWeatherData);
		dispatch(weatherActions.setWeatherIsLoading(false));
		dispatch(weatherActions.setWeatherIsLoaded(true));
	};
};

export const getWeatherByCityName = (cityName: string): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		dispatch(weatherActions.setWeatherIsLoaded(false));
		dispatch(weatherActions.setWeatherIsLoading(true));
		const weatherData = await weatherAPI.getWeatherByCityName(cityName);
		setWeatherData(dispatch, weatherData);
		dispatch(weatherActions.setWeatherIsLoading(false));
		dispatch(weatherActions.setWeatherIsLoaded(true));
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
