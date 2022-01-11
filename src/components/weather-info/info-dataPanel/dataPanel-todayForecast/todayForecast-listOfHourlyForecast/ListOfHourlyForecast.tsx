import React from 'react'
import { useAppSelector } from '../../../../../hooks/redux';
import { getForecastTodayHourlyForecast } from '../../../../../store/forecastReducer/selectors';
import { HourForecast } from '../todayForecast-hourForecast/HourForecast'

export const ListOfHourlyForecast = () => {
    const hourlyForecast = useAppSelector(getForecastTodayHourlyForecast);

    const listOfHourlyForecast = hourlyForecast.map((hourForecast) => {
        const { iconUrl, temperatureC, hour, shortWeather } = hourForecast;

        return <HourForecast
            hourTime={hour}
            iconUrl={iconUrl}
            temperatureC={temperatureC}
            shortWeather={shortWeather}
            key={`hour_forecast_${Date.now() * Math.random()}`} />
    })

    return (
        <ul className='flex flex-col'>
            {listOfHourlyForecast}
        </ul>
    )
}
