import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherLocalDate, getWeatherLocalTime } from '../../../../store/weatherReducer/selectors';

export const CityDate = () => {
    const date = useAppSelector(getWeatherLocalDate);
    const time = useAppSelector(getWeatherLocalTime);

    const dateStyles = `rounded-l-full bg-white flex 
            items-center justify-center px-3 pl-4 py-[2px] mr-1`;

    const timeStyles = `rounded-r-full bg-white 
            flex items-center justify-center px-3 pr-4 py-[2px]`

    return (
        <div className='flex mb-3 xs:mr-2 xs:mb-0'>
            <div className={dateStyles}>
                <time dateTime={date} className='text-[14px] 
                    leading-6 font-bold text-black/80'>
                    {date}
                </time>
            </div>
            <div className={timeStyles}>
                <time dateTime={time} className='text-[14px] 
                    leading-6 font-bold text-black/80'>
                    {time}
                </time>
            </div>
        </div>
    )
}
