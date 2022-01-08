import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { getWeatherIsLoaded } from '../../../store/weatherReducer/selectors'
import { WithCustomSkeleton } from '../../weather-withCustomSkeleton/WithCustomSkeleton'
import { BaseInfo } from './dataPanel-baseInfo/BaseInfo'
import { BaseInfoSkeleton } from './dataPanel-baseInfo/BaseInfoSkeleton'
import { TodayForecast } from './dataPanel-todayForecast/TodayForecast'
import { TodayForecastSkeleton } from './dataPanel-todayForecast/TodayForecastSkeleton'

export const DataPanel = () => {
    const isLoaded = useAppSelector(getWeatherIsLoaded);

    return (
        <div className='overflow-auto flex justify-center px-8'>
            <div className='pb-6 px-2 w-full max-w-[600px] h-fit'>
                <WithCustomSkeleton
                    condition={isLoaded}
                    skeleton={<BaseInfoSkeleton />}>
                    <BaseInfo />
                </WithCustomSkeleton>

                <WithCustomSkeleton
                    condition={isLoaded}
                    skeleton={<TodayForecastSkeleton />}>
                    <TodayForecast />
                </WithCustomSkeleton>
            </div>
        </div>
    )
}