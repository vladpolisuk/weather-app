import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherCityName } from '../../../../store/weatherReducer/selectors';

export const CityName = () => {
    const cityName = useAppSelector(getWeatherCityName);

    const cityNameStyles = `text-shadow-name text-center text-[56px] leading-[1]
            font-extrabold xl:text-left text-5xl ml:text-[55px] xs:text-6xl md:text-7xl xl:mr-2`

    return (
        <h2 className={cityNameStyles}>
            {cityName}
        </h2>
    )
}
