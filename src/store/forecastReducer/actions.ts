import { InferActionsTypes } from '../models';
import { ThreeDayForecast, TodayForecast } from './models';

export enum ForecastActions {
	SET_TODAY_FORECAST = 'SET_TODAY_FORECAST',
	SET_THREE_DAY_FORECAST = 'SET_THREE_DAY_FORECAST',
}

export const forecastActions = {
	setWeatherData: (todayForecastData: TodayForecast) =>
		({ type: ForecastActions.SET_TODAY_FORECAST, payload: todayForecastData } as const),

	setThreeDayForecast: (threeDayForecast: ThreeDayForecast) =>
		({ type: ForecastActions.SET_THREE_DAY_FORECAST, payload: threeDayForecast } as const),
};

export type ForecastActionsType = InferActionsTypes<typeof forecastActions>;
