import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getCityName, getLocalDate, getLocalTime,
    getShortWeather, getWeatherIconUrl
} from '../../../store/weatherReducer/selectors'
import { CityDate } from './city-date/CityDate'
import { CityName } from './city-name/CityName'
import { CityShortWeather } from './city-shortWeather/CityShortWeather'
import { WeatherIcon } from './city-weatherIcon/WeatherIcon'

export const WeatherCity = () => {
    const cityName = useAppSelector(getCityName);
    const localDate = useAppSelector(getLocalDate);
    const localTime = useAppSelector(getLocalTime);
    const shortWeather = useAppSelector(getShortWeather);
    const weatherIconUrl = useAppSelector(getWeatherIconUrl);

    return (
        <div className='xl:mt-0 xl:mb-36 xl:p-5 mb-20 mt-5 px-4 flex flex-col items-start justify-start'>
            <div className='flex items-center justify-start'>
                <CityName name={cityName} />
                <WeatherIcon iconUrl={weatherIconUrl} description={shortWeather} />
            </div>
            <div className='flex'>
                <CityDate date={localDate} time={localTime} />
                <CityShortWeather weather={shortWeather} />
            </div>
        </div>
    )
}
