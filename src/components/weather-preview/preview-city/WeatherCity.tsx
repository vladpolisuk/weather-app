import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { getWeatherIsLoaded } from '../../../store/weatherReducer/selectors'
import { WithSkeleton } from '../../weather-withSkeleton/WithSkeleton'
import { CurrentTemperature } from './city-currentTemperature/CurrentTemperature'
import { CityDate } from './city-date/CityDate'
import { CityName } from './city-name/CityName'
import { CityShortWeather } from './city-shortWeather/CityShortWeather'
import { WeatherIcon } from './city-weatherIcon/WeatherIcon'

export const WeatherCity = () => {
    const isLoaded = useAppSelector(getWeatherIsLoaded);

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
                    condition={isLoaded}
                    className="h-14 bg-white/20 w-64 rounded mr-2">
                    <CityName />
                </WithSkeleton>

                <WithSkeleton
                    condition={isLoaded}
                    className="h-12 bg-white/20 w-12 rounded-md mb-3 xl:mb-0">
                    <WeatherIcon />
                </WithSkeleton>
            </div>
            <div className={weatherCityBottomStyles}>
                <WithSkeleton
                    condition={isLoaded}
                    className='w-36 h-8 bg-white/20 rounded mb-3 xs:mr-2 xs:mb-2 xs:mb-0'>
                    <CityDate />
                </WithSkeleton>

                <WithSkeleton
                    condition={isLoaded}
                    className="h-8 bg-white/20 w-16 rounded mr-2">
                    <CityShortWeather />
                </WithSkeleton>

                <WithSkeleton
                    condition={isLoaded}
                    className='h-8 bg-white/20 w-10 rounded'>
                    <CurrentTemperature />
                </WithSkeleton>
            </div>
        </div>
    )
}