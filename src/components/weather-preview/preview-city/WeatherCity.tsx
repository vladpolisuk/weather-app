import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getWeatherCityName, getWeatherIconUrl, getWeatherLocalDate,
    getWeatherLocalTime, getWeatherShortWeather
} from '../../../store/weatherReducer/selectors'
import { WithSkeleton } from '../../weather-withSkeleton/WithSkeleton'
import { CityDate } from './city-date/CityDate'
import { CityName } from './city-name/CityName'
import { CityShortWeather } from './city-shortWeather/CityShortWeather'
import { WeatherIcon } from './city-weatherIcon/WeatherIcon'

export const WeatherCity = () => {
    const cityName = useAppSelector(getWeatherCityName);
    const localDate = useAppSelector(getWeatherLocalDate);
    const localTime = useAppSelector(getWeatherLocalTime);
    const shortWeather = useAppSelector(getWeatherShortWeather);
    const weatherIconUrl = useAppSelector(getWeatherIconUrl);

    return (
        <div className='xl:mt-0 xl:mb-36 xl:p-5 mb-20 mt-5 px-4 flex flex-col items-center xl:items-start justify-start'>
            <div className='flex items-center xl:justify-start'>
                <WithSkeleton
                    condition={cityName}
                    className="h-12 bg-white/20 w-64 rounded mr-2">
                    <CityName name={cityName} />
                </WithSkeleton>

                <WithSkeleton
                    condition={weatherIconUrl}
                    className="h-12 bg-white/20 w-12 rounded-full hidden xs:block">
                    <WeatherIcon iconUrl={weatherIconUrl} description={shortWeather} />
                </WithSkeleton>
            </div>
            <div className='flex flex-col items-center justify-center
                w-full xs:flex-row xs:items-start xs:justify-start'>
                <WithSkeleton
                    condition={localDate || localTime}
                    className='w-36 h-6 bg-white/20 rounded mt-3 xs:mr-2 mb-2 xs:mb-0'>
                    <CityDate date={localDate} time={localTime} />
                </WithSkeleton>

                <WithSkeleton
                    condition={shortWeather}
                    className="h-6 bg-white/20 w-16 rounded mt-3">
                    <CityShortWeather weather={shortWeather} />
                </WithSkeleton>
            </div>
        </div>
    )
}