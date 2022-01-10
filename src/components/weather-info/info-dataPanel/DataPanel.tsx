import React from 'react'
import { useAppSelector } from '../../../hooks/redux'
import { getWeatherIsLoaded } from '../../../store/weatherReducer/selectors'
import { WithCustomSkeleton } from '../../weather-withCustomSkeleton/WithCustomSkeleton'
import { BaseInfo } from './dataPanel-baseInfo/BaseInfo'
import { BaseInfoSkeleton } from './dataPanel-baseInfo/BaseInfoSkeleton'
import { SecretRoom } from './dataPanel-secretRoom/SecretRoom'
import { ThreeDaysForecast } from './dataPanel-threeDayForecast/ThreeDaysForecast'
import { ThreeDaysForecastSkeleton } from './dataPanel-threeDayForecast/ThreeDaysForecastSkeleton'
import { TodayForecast } from './dataPanel-todayForecast/TodayForecast'
import { TodayForecastSkeleton } from './dataPanel-todayForecast/TodayForecastSkeleton'

export const DataPanel = () => {
    const isLoaded = useAppSelector(getWeatherIsLoaded);

    return (
        <div style={{ overflow: 'overlay' }} className='flex justify-center px-4 sm:px-8'>
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

                <WithCustomSkeleton
                    condition={isLoaded}
                    skeleton={<ThreeDaysForecastSkeleton />}>
                    <ThreeDaysForecast />
                </WithCustomSkeleton>

                <SecretRoom />
            </div>
        </div>
    )
}