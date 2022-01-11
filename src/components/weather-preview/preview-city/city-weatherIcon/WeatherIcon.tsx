import React from 'react';
import { useAppSelector } from '../../../../hooks/redux';
import { getWeatherIconUrl, getWeatherShortWeather } from '../../../../store/weatherReducer/selectors';

export const WeatherIcon = () => {
    const iconUrl = useAppSelector(getWeatherIconUrl);
    const shortWeather = useAppSelector(getWeatherShortWeather);

    const weatherIconStyles = 'w-[70px] h-[70px] bg-no-repeat bg-center bg-cover';

    return <img src={iconUrl} alt={shortWeather} className={weatherIconStyles} />
}
