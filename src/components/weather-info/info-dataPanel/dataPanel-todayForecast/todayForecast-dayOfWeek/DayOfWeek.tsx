import React from 'react';
import { useAppSelector } from '../../../../../hooks/redux';
import { getWeatherLocalDate } from '../../../../../store/weatherReducer/selectors';

export const DayOfWeek = () => {
    const date = useAppSelector(getWeatherLocalDate);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const weekDayNumber = new Date(date).getDay();

    return (
        <p className='text-lg mr-2'>{daysOfWeek[weekDayNumber]}</p>
    )
}
