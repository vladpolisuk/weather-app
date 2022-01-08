import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherCurrentTemperatureC } from '../../../../store/weatherReducer/selectors';

export const CurrentTemperature = () => {
    const currentTemperature = useAppSelector(getWeatherCurrentTemperatureC);

    return (
        <div className='flex items-center justify-center bg-blue-900 px-2 mt-3 xs:mt-0'>
            <p className='font-bold leading-1 text-2xl'>
                {currentTemperature}°C
            </p>
        </div>
    )
}
