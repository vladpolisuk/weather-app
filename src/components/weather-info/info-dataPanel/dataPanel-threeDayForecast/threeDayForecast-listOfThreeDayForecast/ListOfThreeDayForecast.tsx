import React from 'react'
import { useAppSelector } from '../../../../../hooks/redux'
import { getForecastThreeDayForecast } from '../../../../../store/forecastReducer/selectors'
import { ListOfMinMaxAvgForecast } from './lisOfThreeDayForecast-listOfMinMaxAvgForecast/ListOfMinMaxAvgForecast'

export const ListOfThreeDayForecast = () => {
    const threeDayForecast = useAppSelector(getForecastThreeDayForecast)

    const listOfThreeDayForecast = threeDayForecast.map(({
        date,
        dayOfWeek,
        minMaxAvgForecast,
    }) => {
        const dayForecastStyles = `flex flex-col w-full items-center 
                justify-between bg-black/20 py-2 px-3 rounded-md mb-3`

        return (
            <li key={`forecast_${date}`} className={dayForecastStyles}>
                <div className='flex w-full items-center justify-between px-2 py-1'>
                    <p className='font-medium'>{dayOfWeek}</p>
                    <p className='text-sm font-medium'>{date}</p>
                </div>
                <ul className='flex flex-col items-center p-2 w-full'>
                    <ListOfMinMaxAvgForecast minMaxAvgForecast={minMaxAvgForecast} />
                </ul>
            </li>
        )
    })

    return (
        <ul className='flex flex-col items-center'>
            {listOfThreeDayForecast}
        </ul>
    )
}
