import { InferActionsTypes } from '../models';
import { WeatherType } from './models';

export enum WeatherActions {
	SET_WEATHER_DATA = 'SET_WEATHER_DATA',
	SET_WEATHER_WALLPAPER = 'SET_WEATHER_WALLPAPER',
}

export const weatherActions = {
	setWeatherData: (weatherData: WeatherType) =>
		({ type: WeatherActions.SET_WEATHER_DATA, payload: weatherData } as const),

	setWeatherWallpaper: (weatherUrl: string) =>
		({ type: WeatherActions.SET_WEATHER_WALLPAPER, payload: weatherUrl } as const),
};

export type WeatherActionsType = InferActionsTypes<typeof weatherActions>;
