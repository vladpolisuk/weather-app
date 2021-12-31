import React from 'react'
import { CityDate } from './city-date/CityDate'
import { CityName } from './city-name/CityName'
import { CityShortWeather } from './city-shortWeather/CityShortWeather'
import { WeatherIcon } from './city-weatherIcon/WeatherIcon'

export const WeatherCity = () => {
    return (
        <div className='xl:mt-0 xl:mb-36 xl:p-5 mb-20 mt-5 px-4 flex flex-col items-start justify-start'>
            <div className='flex items-center justify-start'>
                <CityName name='Saint-Petersburg' />
                <WeatherIcon />
            </div>
            <div className='flex'>
                <CityDate date='12.31.2021' time='1:09pm' />
                <CityShortWeather weather='cloudy' />
            </div>
        </div>
    )
}
