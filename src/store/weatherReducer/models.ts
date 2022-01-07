import { WeatherActionsType } from './actions';

export type WeatherState = {
	error: string;
	region: string;
	country: string;
	cityName: string;
	localDate: string;
	localTime: string;
	wallpaper: string;
	shortRegion: string;
	shortWeather: string;
	weatherIconUrl: string;
	lastUpdatedTime: string;
	lastUpdatedDate: string;
	currentTemperatureC: number;
};

export type WeatherType = Omit<WeatherState, 'wallpaper' | 'error'>;
export type WeatherReducer = (state: WeatherState | undefined, actions: WeatherActionsType) => WeatherState;
