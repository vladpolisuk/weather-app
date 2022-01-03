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
                {cityName
                    ? <CityName name={cityName} />
                    : <div className="animate-pulse h-12 bg-white/20 w-64 rounded mr-2"></div>}

                {weatherIconUrl
                    ? <WeatherIcon iconUrl={weatherIconUrl} description={shortWeather} />
                    : <div className="animate-pulse h-12 bg-white/20 w-12 rounded-full"></div>}
            </div>
            <div className='flex'>
                {localDate || localTime
                    ? <CityDate date={localDate} time={localTime} />
                    : <div className='animate-pulse w-48 flex mt-3'>
                        <div className='w-24 h-6 bg-white/20 rounded mr-1'></div>
                        <div className='w-24 h-6 bg-white/20 rounded mr-1'></div>
                    </div>}

                {shortWeather
                    ? <CityShortWeather weather={shortWeather} />
                    : <div className="animate-pulse h-6 bg-white/20 w-16 rounded mt-3"></div>}
            </div>
        </div>
    )
}