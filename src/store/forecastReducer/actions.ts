import { InferActionsTypes } from '../models';
import { TodayForecast } from './models';

export enum ForecastActions {
	SET_TODAY_FORECAST = 'SET_TODAY_FORECAST',
}

export const forecastActions = {
	setWeatherData: (todayForecastData: TodayForecast) =>
		({ type: ForecastActions.SET_TODAY_FORECAST, payload: todayForecastData } as const),
};

export type ForecastActionsType = InferActionsTypes<typeof forecastActions>;
