import { WeatherType } from '../../../store/weatherReducer/models';

export const pullOutWeatherData = (data: any): WeatherType => {
	const {
		location: { name, region, country, tz_id, localtime },
		current: {
			temp_c,
			last_updated,
			condition: { text, icon },
		},
	} = data;

	const localDate = localtime.split(' ')[0];
	const localTime = localtime.split(' ')[1];
	const lastUpdatedDate = last_updated.split(' ')[0];
	const lastUpdatedTime = last_updated.split(' ')[0];
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
		shortRegion: tz_id,
		shortWeather: text,
		currentTemperatureC: temp_c,
	};

	return result;
};
