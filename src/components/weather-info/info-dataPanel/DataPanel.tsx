import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getWeatherCityName, getWeatherCountry,
    getWeatherIconUrl, getWeatherShortWeather
} from '../../../store/weatherReducer/selectors'
import { BaseInfo } from './dataPanel-baseInfo/BaseInfo'

export const DataPanel = () => {
    const cityName = useAppSelector(getWeatherCityName);
    const country = useAppSelector(getWeatherCountry);
    const iconURL = useAppSelector(getWeatherIconUrl);
    const shortWeather = useAppSelector(getWeatherShortWeather);

    return (
        <div className='overflow-auto px-8'>
            <div className='pb-6 px-2'>
                <BaseInfo
                    country={country}
                    iconURL={iconURL}
                    cityName={cityName}
                    shortWeather={shortWeather} />
            </div>
        </div>
    )
}
