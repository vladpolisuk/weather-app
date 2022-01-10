import React, { useEffect, useState } from 'react';
import { FaAngleDown, FaAngleUp, FaArrowDown, FaArrowUp } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../hooks/redux';
import { getTodayForecast } from '../../../../store/forecastReducer/reducer';
import {
    getForecastTodayMaxTemperatureC,
    getForecastTodayMinTemperatureC
} from '../../../../store/forecastReducer/selectors';
import { getWeatherCityName, getWeatherIsLoaded } from '../../../../store/weatherReducer/selectors';
import { InfoBox } from '../dataPanel-infoBox/InfoBox';
import { ListOfHourlyForecast } from './todayForecast-listOfHourlyForecast/ListOfHourlyForecast';

export const TodayForecast = () => {
    const dispatch = useDispatch();
    const cityName = useAppSelector(getWeatherCityName);
    const isLoaded = useAppSelector(getWeatherIsLoaded);
    const maxTemperatureC = useAppSelector(getForecastTodayMaxTemperatureC);
    const minTemperatureC = useAppSelector(getForecastTodayMinTemperatureC);
    const [isShowMore, setIsShowMore] = useState(false);

    const toggleShowMoreForecast = () => {
        setIsShowMore((currentState) => !currentState)
    }

    useEffect(() => {
        if (isLoaded) dispatch(getTodayForecast(cityName))
    }, [dispatch, isLoaded, cityName])

    const showMoreTodayForecastButtonStyles = `flex items-center outline-none left-0
            justify-center h-10 w-full absolute bottom-0 bg-black/20 hover:bg-black/30 
            focus:shadow-[0_0_0_2px_#333] active:shadow-[0_0_0_2px_#333333] rounded-b`

    return (
        <InfoBox className='pb-10'>
            <div className='flex items-center justify-between mb-3'>
                <p className='font-bold text-lg'>Today</p>
                <div className='flex'>
                    <div className='flex items-center mr-3'>
                        <FaArrowDown className='mr-[2px]' color='#6868ff' />
                        <p className='text-slate-200 font-bold text-blue-50'>
                            {minTemperatureC}°C
                        </p>
                    </div>
                    <div className='flex items-center'>
                        <FaArrowUp className='mr-[2px]' color='#ff5f5f' />
                        <p className='text-slate-200 font-bold text-red-50'>
                            {maxTemperatureC}°C
                        </p>
                    </div>
                </div>
            </div>
            <div className={`overflow-hidden mb-1 ${isShowMore ? 'max-h-full' : 'max-h-[168px]'}`}>
                <ListOfHourlyForecast />
            </div>
            <button
                onClick={toggleShowMoreForecast}
                className={showMoreTodayForecastButtonStyles}>
                {isShowMore ? <FaAngleUp /> : <FaAngleDown />}
            </button>
        </InfoBox>
    )
}
