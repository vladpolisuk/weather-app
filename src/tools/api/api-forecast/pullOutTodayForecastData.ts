import { HourForecast, TodayForecast } from '../../../store/forecastReducer/models';

export const pullOutTodayForecastData = ({ data }: any): TodayForecast => {
	const { hour, day: { maxtemp_c, mintemp_c } } = data.forecast.forecastday[0];

	const hourlyForecast: HourForecast[] = hour.map((hour: any): HourForecast => {
		const { time, temp_c, condition: { icon, text } } = hour;
		const hourTime = time.split(' ')[1];

		return {
			iconUrl: icon,
			hour: hourTime,
			shortWeather: text,
			temperatureC: temp_c,
		};
	});

	const result: TodayForecast = {
		hourlyForecast,
		maxTemperatureC: maxtemp_c,
		minTemperatureC: mintemp_c,
	};

	return result;
};
