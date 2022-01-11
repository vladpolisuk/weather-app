import { WeatherType } from '../../../store/weatherReducer/models';

export const pullOutWeatherData = ({ data }: any): WeatherType => {
	const {
		location: { name, region, country, tz_id, localtime },
		current: {
			temp_c,
			last_updated,
			condition: { text, icon },
		},
	} = data;

	const [localDate, localTime] = localtime.split(' ');
	const [lastUpdatedDate, lastUpdatedTime] = last_updated.split(' ');
	const weatherIconUrl = `https:${icon}`;

	const result: WeatherType = {
		region,
		country,
		localDate,
		localTime,
		cityName: name,
		weatherIconUrl,
		lastUpdatedDate,
		lastUpdatedTime,
		responseError: '',
		shortRegion: tz_id,
		shortWeather: text,
		currentTemperatureC: temp_c,
	};

	return result;
};
