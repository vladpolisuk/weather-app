import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import {
    getWeatherCityName, getWeatherCountry,
    getWeatherIconUrl, getWeatherShortWeather
} from '../../../store/weatherReducer/selectors'
import { WithCustomSkeleton } from '../../weather-withCustomSkeleton/WithCustomSkeleton'
import { WithSkeleton } from '../../weather-withSkeleton/WithSkeleton'
import { BaseInfo } from './dataPanel-baseInfo/BaseInfo'
import { BaseInfoSkeleton } from './dataPanel-baseInfo/BaseInfoSkeleton'
import { TodayForecast } from './dataPanel-todayForecast/TodayForecast'

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
                    skeleton={<BaseInfoSkeleton />}>
                    <BaseInfo
                        country={country}
                        iconURL={iconURL}
                        cityName={cityName}
                        shortWeather={shortWeather} />
                </WithCustomSkeleton>

                <WithSkeleton
                    condition={isLoaded}
                    className='bg-white/20 mt-4 h-24 w-full rounded-md'>
                    <TodayForecast />
                </WithSkeleton>
            </div>
        </div>
    )
}