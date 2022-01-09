import { ThreeDayForecast } from '../../../store/forecastReducer/models';
import { getDayOfWeek } from '../../getDayOfWeek';

export const pullOutThreeDayForecastData = ({ data }: any): ThreeDayForecast => {
	const forecastday = data.forecast.forecastday;

	const result: ThreeDayForecast = forecastday.map((dayForecast: any) => {
		const {
			date,
			hour,
			day: { mintemp_c, avgtemp_c, maxtemp_c, condition },
		} = dayForecast;

		const dayOfWeek = getDayOfWeek(date);
		const time = `${date} ${new Date().getHours()}:${new Date().getMinutes()}`;

		const minTempForecast = hour.find(({ temp_c }: any) => temp_c === mintemp_c);
		const avgTempForecast = { time, temp_c: avgtemp_c, condition };
		const maxTempForecast = hour.find(({ temp_c }: any) => temp_c === maxtemp_c);

		const array = [minTempForecast, avgTempForecast, maxTempForecast];
		const minMaxAvgForecast = getMinMaxAvgForecast(array, mintemp_c, avgtemp_c, maxtemp_c);

		return {
			date,
			dayOfWeek,
			minMaxAvgForecast,
		};
	});

	return result;
};

const getMinMaxAvgForecast = (
	array: any[],
	minTemperatureC: number,
	avgTemperatureC: number,
	maxTemperatureC: number
) => {
	return array.map((hourForecast: any) => {
		const {
			time,
			temp_c,
			condition: { text, icon },
		} = hourForecast;

		const tempHourTime = time.split(' ')[1];
		let temperatureScale = '';
		if (minTemperatureC === temp_c) temperatureScale = 'Min';
		if (avgTemperatureC === temp_c) temperatureScale = 'Avg';
		if (maxTemperatureC === temp_c) temperatureScale = 'Max';

		return {
			iconUrl: icon,
			temperatureScale,
			shortWeather: text,
			temperatureC: temp_c,
			hourTime: tempHourTime,
		};
	});
};
