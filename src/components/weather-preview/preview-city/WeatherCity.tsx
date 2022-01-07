import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getCurrentTemperatureC,
    getWeatherCityName, getWeatherIconUrl, getWeatherLocalDate,
    getWeatherLocalTime, getWeatherShortWeather
} from '../../../store/weatherReducer/selectors'
import { WithSkeleton } from '../../weather-withSkeleton/WithSkeleton'
import { CurrentTemperature } from './city-currentTemperature/CurrentTemperature'
import { CityDate } from './city-date/CityDate'
import { CityName } from './city-name/CityName'
import { CityShortWeather } from './city-shortWeather/CityShortWeather'
import { WeatherIcon } from './city-weatherIcon/WeatherIcon'

export const WeatherCity = () => {
    const cityName = useAppSelector(getWeatherCityName);
    const localDate = useAppSelector(getWeatherLocalDate);
    const localTime = useAppSelector(getWeatherLocalTime);
    const weatherIconUrl = useAppSelector(getWeatherIconUrl);
    const shortWeather = useAppSelector(getWeatherShortWeather);
    const currentTemperatureC = useAppSelector(getCurrentTemperatureC);

    const weatherCityStyles = ` mb-20 mt-5 px-4 flex flex-col items-center justify-center 
                    xl:mt-0 lg:mb-36 xl:p-5 xl:items-start sm:justify-start`

    const weatherCityTopStyles = `flex items-center flex-col-reverse mb-4 xl:flex-row 
                    xl:justify-start sm:mb-4 md:mb-6 xs:mb-5`

    const weatherCityBottomStyles = `flex flex-col items-center justify-center w-full 
                    xs:flex-row xl:justify-start`

    return (
        <div className={weatherCityStyles}>
            <div className={weatherCityTopStyles}>
                <WithSkeleton
                    condition={cityName}
                    className="h-12 bg-white/20 w-64 rounded mr-2">
                    <CityName name={cityName} />
                </WithSkeleton>

                <WithSkeleton
                    condition={weatherIconUrl}
                    className="h-12 bg-white/20 w-12 rounded-md mb-3 xl:mb-0">
                    <WeatherIcon
                        iconUrl={weatherIconUrl}
                        description={shortWeather} />
                </WithSkeleton>
            </div>
            <div className={weatherCityBottomStyles}>
                <WithSkeleton
                    condition={localDate || localTime}
                    className='w-36 h-6 bg-white/20 rounded mt-2 mb-3 xs:mr-2 xs:mb-2 xs:mb-0'>
                    <CityDate date={localDate} time={localTime} />
                </WithSkeleton>

                <WithSkeleton
                    condition={shortWeather}
                    className="h-6 bg-white/20 w-16 rounded mt-2 mr-2">
                    <CityShortWeather weather={shortWeather} />
                </WithSkeleton>

                <WithSkeleton
                    condition={currentTemperatureC}
                    className='h-6 bg-white/20 w-10 rounded mt-2'>
                    <CurrentTemperature temp={currentTemperatureC} />
                </WithSkeleton>
            </div>
        </div>
    )
}