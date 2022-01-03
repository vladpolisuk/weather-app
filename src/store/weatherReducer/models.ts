import { WeatherActionsType } from './actions';

export type WeatherState = {
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
};

export type WeatherType = Omit<WeatherState, 'wallpaper'>;
export type WeatherReducer = (state: WeatherState | undefined, actions: WeatherActionsType) => WeatherState;
