import { AppState } from '../models';

export const getWeatherWallpaperUrl = (state: AppState) => {
	return state.weather.wallpaper;
};

export const getCityName = (state: AppState) => {
	return state.weather.cityName;
};

export const getLocalDate = (state: AppState) => {
	return state.weather.localDate;
};

export const getLocalTime = (state: AppState) => {
	return state.weather.localTime;
};

export const getShortWeather = (state: AppState) => {
	return state.weather.shortWeather;
};

export const getWeatherIconUrl = (state: AppState) => {
	return state.weather.weatherIconUrl;
};
