import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherIconUrl } from '../../../../store/weatherReducer/selectors';

export const WeatherIcon = () => {
    const iconUrl = useAppSelector(getWeatherIconUrl);

    return (
        <div className='w-[80px] h-[70px] bg-no-repeat bg-center bg-cover'
            style={{ backgroundImage: `url(${iconUrl})` }}>
        </div>
    )
}
