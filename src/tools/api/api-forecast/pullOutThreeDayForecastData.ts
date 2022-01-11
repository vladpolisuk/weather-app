import { ThreeDayForecast } from '../../../store/forecastReducer/models';
import { getFormattedTime } from '../../data/time/getFormattedTime';
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
		const minutes = new Date().getMinutes();
		const hours = new Date().getHours();
		const formattedHours = hours < 10 ? `0${hours}` : hours;
		const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes
		const time = `${date} ${formattedHours}:${formattedMinutes}`;

		let hourMinTempC = 1000;
		let hourMaxTempC = -1000;

		hour.forEach(({ temp_c }: any) => {
			if (temp_c <= hourMinTempC) hourMinTempC = temp_c;
			else return;
		});

		hour.forEach(({ temp_c }: any) => {
			if (temp_c > hourMaxTempC) hourMaxTempC = temp_c;
			else return;
		});

		const avgTempForecast = { time, temp_c: avgtemp_c, condition };
		const minTempForecast = hour.find(({ temp_c }: any) => temp_c === mintemp_c || temp_c === hourMinTempC);
		const maxTempForecast = hour.find(({ temp_c }: any) => temp_c === maxtemp_c || temp_c === hourMaxTempC);

		const realMinTempC = minTempForecast.temp_c;
		const realMaxTempC = maxTempForecast.temp_c;

		const array = [minTempForecast, avgTempForecast, maxTempForecast];
		const minMaxAvgForecast = getMinMaxAvgForecast(array, realMinTempC, avgtemp_c, realMaxTempC);

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
) => array.map((hourForecast: any) => {
	const { time, temp_c, condition: { text, icon } } = hourForecast;
	const tempHourTime = time.split(' ')[1];
	const formattedTime = getFormattedTime(tempHourTime);

	let temperatureScale = '';
	if (minTemperatureC === temp_c) temperatureScale = 'Min';
	if (avgTemperatureC === temp_c) temperatureScale = 'Avg';
	if (maxTemperatureC === temp_c) temperatureScale = 'Max';

	return {
		iconUrl: icon,
		temperatureScale,
		shortWeather: text,
		temperatureC: temp_c,
		hourTime: formattedTime,
	};
});
