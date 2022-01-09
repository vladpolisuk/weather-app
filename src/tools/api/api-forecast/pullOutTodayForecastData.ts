import { HourForecast, TodayForecast } from '../../../store/forecastReducer/models';

export const pullOutTodayForecastData = ({ data }: any): TodayForecast => {
	const {
		hour,
		day: { maxtemp_c, mintemp_c, avgtemp_c },
		astro: { sunrise, sunset },
	} = data.forecast.forecastday[0];

	const hourlyForecast: HourForecast[] = hour.map((hour: any): HourForecast => {
		const {
			time,
			temp_c,
			condition: { icon, text },
		} = hour;

		const formattedHourTime = time.split(' ')[1];

		return {
			icon,
			shortWeather: text,
			temperatureC: temp_c,
			hour: formattedHourTime,
		};
	});

	const result: TodayForecast = {
		hourlyForecast,
		sunsetTime: sunset,
		sunriseTime: sunrise,
		maxTemperatureC: maxtemp_c,
		minTemperatureC: mintemp_c,
		avgTemperatureC: avgtemp_c,
	};

	return result;
};
