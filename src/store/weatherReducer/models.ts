import { WeatherActionsType } from './actions';

export type WeatherState = {
	region: string;
	country: string;
	cityName: string;
	isLoaded: boolean;
	localDate: string;
	localTime: string;
	wallpaper: string;
	isLoading: boolean;
	shortRegion: string;
	shortWeather: string;
	responseError: string;
	weatherIconUrl: string;
	lastUpdatedTime: string;
	lastUpdatedDate: string;
	currentTemperatureC: number;
};

export type WeatherType = Omit<WeatherState, 'wallpaper' | 'error' | 'isLoaded' | 'isLoading'>;
export type WeatherReducer = (state: WeatherState | undefined, actions: WeatherActionsType) => WeatherState;
