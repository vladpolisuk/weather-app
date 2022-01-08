import { AppState } from '../models';

export const getForecastTodayHourlyForecast = (state: AppState) => {
	return state.forecast.todayForecast.hourlyForecast;
};

export const getForecastTodayMaxTemperatureC = (state: AppState) => {
	return state.forecast.todayForecast.maxTemperatureC;
};

export const getForecastTodayMinTemperatureC = (state: AppState) => {
	return state.forecast.todayForecast.minTemperatureC;
};
