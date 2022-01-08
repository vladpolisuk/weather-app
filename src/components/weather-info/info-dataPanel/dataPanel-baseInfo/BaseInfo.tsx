import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { useAppSelector } from '../../../../hooks/redux';
import {
    getWeatherCityName, getWeatherCountry,
    getWeatherIconUrl, getWeatherShortWeather
} from '../../../../store/weatherReducer/selectors';
import { InfoBox } from '../dataPanel-infoBox/InfoBox';

export const BaseInfo = () => {
    const country = useAppSelector(getWeatherCountry);
    const iconURL = useAppSelector(getWeatherIconUrl);
    const cityName = useAppSelector(getWeatherCityName);
    const shortWeather = useAppSelector(getWeatherShortWeather);

    const shortWeatherStyles = `bg-white/90 text-black/90 font-bold px-2 pb-[2px] 
                    rounded mr-1 text-[14px] leading-[1.5] xs:text-[16px]`;

    const countryStyles = `hidden xs:inline text-lg font-thin mr-1 underline 
                    decoration-1 truncate`

    const weatherStyles = `flex items-center justify-between w-full 
                    min-w-fit sm:justify-center sm:w-[inherit]`

    const weatherLocationStyles = `flex items-center min-w-0 justify-between 
                    w-full sm:justify-start sm:w-[inherit] sm:mr-5`;

    return (
        <InfoBox>
            <div className='flex items-center justify-between flex-col sm:flex-row'>
                <div className={weatherLocationStyles}>
                    <p className='text-xl sm:text-lg font-bold mr-3'>{cityName}</p>
                    <div className='flex relative items-center text-slate-400 min-w-0 sm:flex-1'>
                        <p className={countryStyles}>{country}</p>
                        <div className='w-5 h-5 sm:w-4 sm:h-4 md:mr-2'>
                            <FaMapMarkerAlt className='w-full h-full min-w-4 min-h-4' />
                        </div>
                        <a style={{ contentVisibility: 'hidden' }}
                            rel='noreferrer' target="_blank"
                            className='absolute w-full h-full'
                            aria-label={`Go to ${country} on maps`}
                            href={`https://www.google.com/maps/place/${cityName}`}>
                            Go to {country} on maps
                        </a>
                    </div>
                </div>
                <div className={weatherStyles}>
                    <p className={shortWeatherStyles}>{shortWeather}</p>
                    <img alt={shortWeather} src={iconURL} className='w-10' />
                </div>
            </div>
        </InfoBox>
    )
}

