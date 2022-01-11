import { weatherAPI } from '../../api/api-weather/weatherAPI';
import { AppThunkDispatch, ThunkType } from '../models';
import { WeatherActions, weatherActions, WeatherActionsType } from './actions';
import { WeatherReducer, WeatherState, WeatherType } from './models';

const initialState: WeatherState = {
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
	responseError: '',
	weatherIconUrl: '',
	lastUpdatedDate: '',
	lastUpdatedTime: '',
	currentTemperatureC: 0,
};

export const weatherReducer: WeatherReducer = (state = initialState, action): WeatherState => {
	switch (action.type) {
		case WeatherActions.SET_WEATHER_DATA:
			return { ...state, ...action.payload };

		case WeatherActions.SET_WEATHER_WALLPAPER:
			return { ...state, wallpaper: action.payload };

		case WeatherActions.SET_IS_LOADED:
			return { ...state, isLoaded: action.payload };

		case WeatherActions.SET_IS_LOADING:
			return { ...state, isLoading: action.payload };

		case WeatherActions.SET_RESPONSE_ERROR:
			return { ...state, responseError: action.payload };

		default:
			return state;
	}
};

const setWeatherData = (
	dispatch: AppThunkDispatch<WeatherActionsType>,
	weatherData: WeatherType | string
) => {
	weatherData = weatherData as WeatherType;
	dispatch(weatherActions.setResponseError(''));
	dispatch(weatherActions.setWeatherData(weatherData));
	const city = weatherData.shortRegion.split('/')[1];
	dispatch(getWeatherWallpaper(weatherData.shortWeather, city));
	dispatch(weatherActions.setWeatherIsLoading(false));
	dispatch(weatherActions.setWeatherIsLoaded(true));
};

const setGeolocationData = async (
	dispatch: AppThunkDispatch<WeatherActionsType>,
	{ coords: { latitude, longitude } }: GeolocationPosition
) => {
	const geolocationState = await weatherAPI.getGeolocationByCoords(latitude, longitude);
	dispatch(getWeatherByCityName(geolocationState));
};

export const getRandomWeatherData = (): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		dispatch(weatherActions.setWeatherIsLoading(true));
		let randomWeatherData = await weatherAPI.getRandomWeather();

		if (randomWeatherData === '404 Not Found') {
			dispatch(weatherActions.setResponseError(randomWeatherData));
			dispatch(weatherActions.setWeatherIsLoading(false));
			dispatch(weatherActions.setWeatherIsLoaded(true));
		} else setWeatherData(dispatch, randomWeatherData);
	};
};

export const getWeatherByCityName = (cityName: string): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		dispatch(weatherActions.setWeatherIsLoaded(false));
		dispatch(weatherActions.setWeatherIsLoading(true));
		let weatherData = await weatherAPI.getWeatherByCityName(cityName);

		if (weatherData === '404 Not Found') {
			dispatch(weatherActions.setResponseError(weatherData));
			dispatch(weatherActions.setWeatherIsLoading(false));
			dispatch(weatherActions.setWeatherIsLoaded(true));
		} else setWeatherData(dispatch, weatherData);
	};
};

export const getWeatherByGeolocationData = (): ThunkType<WeatherActionsType> => {
	return async (dispatch) => {
		if (window.navigator.geolocation) {
			window.navigator.geolocation.getCurrentPosition(
				(geolocation) => setGeolocationData(dispatch, geolocation),
				() => dispatch(getRandomWeatherData())
			);
		}
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
