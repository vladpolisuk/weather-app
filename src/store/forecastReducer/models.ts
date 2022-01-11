import { ForecastActionsType } from './actions';

export interface ForecastState {
	todayForecast: TodayForecast;
	threeDayForecast: ThreeDayForecast;
}

export type ThreeDayForecast = DayForecast[];

export interface TodayForecast {
	maxTemperatureC: number;
	minTemperatureC: number;
	hourlyForecast: HourForecast[];
}

export interface DayForecast {
	date: string;
	dayOfWeek: string;
	minMaxAvgForecast: MinMaxAvgForecast[];
}

export interface MinMaxAvgForecast {
	iconUrl: string;
	hourTime: string;
	shortWeather: string;
	temperatureC: number;
	temperatureScale: 'Min' | 'Max' | 'Avg';
}

export interface HourForecast {
	hour: string;
	iconUrl: string;
	shortWeather: string;
	temperatureC: number;
}

export type ForecastReducer = (
	state: ForecastState | undefined,
	action: ForecastActionsType
) => ForecastState;
