import { ForecastActionsType } from './actions';

export interface ForecastState {
	todayForecast: TodayForecast;
}

export interface TodayForecast {
	sunsetTime: number;
	sunriseTime: number;
	maxTemperatureC: number;
	minTemperatureC: number;
	avgTemperatureC: number;
	hourlyForecast: HourForecast[];
}

export interface HourForecast {
	icon: string;
	hour: string;
	shortWeather: string;
	temperatureC: number;
}

export type ForecastReducer = (
	state: ForecastState | undefined,
	action: ForecastActionsType
) => ForecastState;
