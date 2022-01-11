import { WeatherType } from '../../../store/weatherReducer/models';
import { getFormattedTime } from '../../data/time/getFormattedTime';

export const pullOutWeatherData = ({ data }: any): WeatherType => {
	const {
		location: { name, region, country, tz_id, localtime },
		current: { temp_c, last_updated, condition: { text, icon } },
	} = data;

	const [localDate, localTime] = localtime.split(' ');
	const formattedTime = getFormattedTime(localTime);
	const [lastUpdatedDate, lastUpdatedTime] = last_updated.split(' ');

	const result: WeatherType = {
		region,
		country,
		localDate,
		cityName: name,
		lastUpdatedDate,
		lastUpdatedTime,
		responseError: '',
		shortRegion: tz_id,
		shortWeather: text,
		weatherIconUrl: icon,
		localTime: formattedTime,
		currentTemperatureC: temp_c,
	};

	return result;
};
