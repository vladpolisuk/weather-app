import { forecastAPI } from '../../api/api-forecast/forecastAPI';
import { ThunkType } from '../models';
import { forecastActions, ForecastActions, ForecastActionsType } from './actions';
import { ForecastReducer, ForecastState } from './models';

export const initialState: ForecastState = {
	todayForecast: {
		sunsetTime: 0,
		sunriseTime: 0,
		hourlyForecast: [],
		maxTemperatureC: 0,
		minTemperatureC: 0,
		avgTemperatureC: 0,
	},
	threeDayForecast: [],
};

export const forecastReducer: ForecastReducer = (state = initialState, action) => {
	switch (action.type) {
		case ForecastActions.SET_TODAY_FORECAST:
			return { ...state, todayForecast: action.payload };

		case ForecastActions.SET_THREE_DAY_FORECAST:
			return { ...state, threeDayForecast: action.payload };

		default:
			return state;
	}
};

export const getTodayForecast = (cityName: string): ThunkType<ForecastActionsType> => {
	return async (dispatch) => {
		const todayForecast = await forecastAPI.getTodayForecastByCityName(cityName);
		dispatch(forecastActions.setWeatherData(todayForecast));
	};
};

export const getThreeDayForecast = (cityName: string): ThunkType<ForecastActionsType> => {
	return async (dispatch) => {
		const threeDayForecast = await forecastAPI.getThreeDayForecast(cityName);
		dispatch(forecastActions.setThreeDayForecast(threeDayForecast));
	};
};
