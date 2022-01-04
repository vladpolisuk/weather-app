import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getWeatherCityName, getWeatherCountry,
    getWeatherIconUrl, getWeatherShortWeather
} from '../../../store/weatherReducer/selectors'
import { WithCustomSkeleton } from '../../weather-withCustomSkeleton/WithCustomSkeleton'
import { BaseInfo } from './dataPanel-baseInfo/BaseInfo'

export const DataPanel = () => {
    const cityName = useAppSelector(getWeatherCityName);
    const country = useAppSelector(getWeatherCountry);
    const iconURL = useAppSelector(getWeatherIconUrl);
    const shortWeather = useAppSelector(getWeatherShortWeather);

    return (
        <div className='overflow-auto px-8'>
            <div className='pb-6 px-2'>
                <WithCustomSkeleton
                    condition={cityName}
                    skeleton={<Skeleton />}>
                    <BaseInfo
                        country={country}
                        iconURL={iconURL}
                        cityName={cityName}
                        shortWeather={shortWeather} />
                </WithCustomSkeleton>
            </div>
        </div>
    )
}

const Skeleton = () => {
    return (
        <div className='animate-pulse bg-white/20 px-5 py-3 rounded-md 
            flex items-center justify-between w-full max-w-[600px]'>
            <div className='flex items-center'>
                <div className='animate-pulse bg-white/10 w-24 h-8 rounded mr-2'></div>
                <div className='animate-pulse bg-white/10 w-16 h-8 rounded'></div>
            </div>
            <div className='flex items-center'>
                <div className='animate-pulse bg-white/10 w-16 h-8 rounded mr-2'></div>
                <div className='animate-pulse bg-white/10 w-8 h-8 rounded'></div>
            </div>
        </div>
    )
}