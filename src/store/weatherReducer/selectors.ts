import { AppState } from '../models';

export const getWeatherIsLoaded = (state: AppState) => {
	return state.weather.isLoaded;
};

export const getWeatherIsLoading = (state: AppState) => {
	return state.weather.isLoading;
};

export const getWeatherWallpaperUrl = (state: AppState) => {
	return state.weather.wallpaper;
};

export const getWeatherCityName = (state: AppState) => {
	return state.weather.cityName;
};

export const getWeatherCountry = (state: AppState) => {
	return state.weather.country;
};

export const getWeatherLocalDate = (state: AppState) => {
	return state.weather.localDate;
};

export const getWeatherLocalTime = (state: AppState) => {
	return state.weather.localTime;
};

export const getWeatherShortWeather = (state: AppState) => {
	return state.weather.shortWeather;
};

export const getWeatherIconUrl = (state: AppState) => {
	return state.weather.weatherIconUrl;
};

export const getWeatherCurrentTemperatureC = (state: AppState) => {
	return state.weather.currentTemperatureC;
};
