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

    const weatherCityStyles = `xl:mt-0 xl:mb-36 xl:p-5 mb-20 mt-5 px-4 flex 
            flex-col items-center justify-center xl:items-start sm:justify-start`

    return (
        <div className={weatherCityStyles}>
            <div className='flex items-center flex-col-reverse mb-4
                sm:flex-row xl:justify-start xs:mb-5 sm:mb-4 md:mb-6'>
                <WithSkeleton
                    condition={cityName}
                    className="h-12 bg-white/20 w-64 rounded mr-2">
                    <CityName name={cityName} />
                </WithSkeleton>

                <WithSkeleton
                    condition={weatherIconUrl}
                    className="h-12 bg-white/20 w-12 rounded-md mb-3 sm:mb-0">
                    <WeatherIcon iconUrl={weatherIconUrl} description={shortWeather} />
                </WithSkeleton>
            </div>
            <div className='flex flex-col items-center justify-center
                w-full xs:flex-row sm:items-start sm:justify-start'>
                <WithSkeleton
                    condition={localDate || localTime}
                    className='w-36 h-6 bg-white/20 rounded mt-3 mb-3 xs:mr-2 xs:mb-2 xs:mb-0'>
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