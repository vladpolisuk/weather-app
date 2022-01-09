import React, { useEffect } from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../../../hooks/redux'
import { getThreeDayForecast } from '../../../../store/forecastReducer/reducer'
import { getWeatherCityName } from '../../../../store/weatherReducer/selectors'
import { InfoBox } from '../dataPanel-infoBox/InfoBox'
import { ListOfThreeDayForecast } from './threeDayForecast-listOfThreeDayForecast/ListOfThreeDayForecast'

export const ThreeDaysForecast = () => {
    const dispatch = useDispatch()
    const cityName = useAppSelector(getWeatherCityName);

    useEffect(() => {
        dispatch(getThreeDayForecast(cityName));
    }, [dispatch, cityName])

    return (
        <InfoBox>
            <div className='flex items-center justify-between mb-3'>
                <p className='font-bold text-lg'>3-Day Forecast</p>
                <FaRegCalendarCheck className='w-5 h-5 text-cyan-600' />
            </div>
            <ListOfThreeDayForecast />
        </InfoBox>
    )
}
