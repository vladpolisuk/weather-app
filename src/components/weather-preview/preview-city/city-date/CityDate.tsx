import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherLocalDate, getWeatherLocalTime } from '../../../../store/weatherReducer/selectors';
import { onUpdatedTime } from '../../../../tools/data/time/onUpdatedTime';

export const CityDate = () => {
    const date = useAppSelector(getWeatherLocalDate);
    const time = useAppSelector(getWeatherLocalTime);
    const [liveTime, setLiveTime] = useState(time || '')

    useEffect(() => {
        setTimeout(() => {
            const updatedTime = onUpdatedTime(liveTime);
            setLiveTime(updatedTime);
        }, 1000 * 60)
    }, [liveTime])

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
                    {liveTime}
                </time>
            </div>
        </div>
    )
}
