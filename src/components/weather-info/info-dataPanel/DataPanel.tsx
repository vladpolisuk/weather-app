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
    const skeletonStyles = `'animate-pulse bg-white/20 px-5 py-3 rounded-md 
            flex items-center justify-between w-full max-w-[600px]'z`

    return (
        <div className={skeletonStyles}>
            <div className='flex items-start flex-col sm:items-center sm:flex-row'>
                <div className='animate-pulse bg-white/10 w-24 h-8 rounded mb-2 sm:mb-0 sm:mr-2'></div>
                <div className='animate-pulse bg-white/10 w-16 h-8 rounded'></div>
            </div>
            <div className='flex items-end flex-col sm:items-center sm:flex-row'>
                <div className='animate-pulse bg-white/10 w-8 h-8 rounded mb-2 sm:mb-0 sm:mr-2 xs:w-24 sm:w-32'></div>
                <div className='animate-pulse bg-white/10 w-8 h-8 rounded'></div>
            </div>
        </div>
    )
}