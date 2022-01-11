import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherLocalDate, getWeatherLocalTime } from '../../../../store/weatherReducer/selectors';
import { onUpdateTime } from '../../../../tools/data/time/onUpdateTime';

export const CityDate = () => {
    const date = useAppSelector(getWeatherLocalDate);
    const time = useAppSelector(getWeatherLocalTime);
    const [liveTime, setLiveTime] = useState(time || '')

    useEffect(() => {
        setTimeout(() => {
            const updatedTime = onUpdateTime(liveTime);
            setLiveTime(updatedTime);
        }, 1000 * 60)
    }, [liveTime])

    const dateWrapperStyles = `rounded-l-full bg-white flex 
            items-center justify-center px-3 pl-4 py-[2px] mr-1`;

    const timeWrapperStyles = `rounded-r-full bg-white 
            flex items-center justify-center px-3 pr-4 py-[2px]`

    const dateTimeStyles = `text-[14px] leading-6 font-bold text-black/80`

    return (
        <div className='flex mb-3 xs:mr-2 xs:mb-0'>
            <div className={dateWrapperStyles}>
                <time dateTime={date}
                    className={dateTimeStyles}>
                    {date}
                </time>
            </div>
            <div className={timeWrapperStyles}>
                <time dateTime={time}
                    className={dateTimeStyles}>
                    {liveTime}
                </time>
            </div>
        </div>
    )
}
