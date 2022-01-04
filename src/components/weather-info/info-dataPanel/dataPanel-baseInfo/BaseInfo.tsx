import React, { FC } from 'react'
import { FaLocationArrow } from 'react-icons/fa'

interface Props {
    cityName: string;
    country: string;
    shortWeather: string;
    iconURL: string;
}

export const BaseInfo: FC<Props> = ({ cityName, country, shortWeather, iconURL }) => {
    const shortWeatherStyles = `bg-white/90 text-black/90 font-bold px-2 pb-[2px] rounded mr-1 leading-[1.5]`

    return (
        <div className='bg-black/30 px-5 py-3 rounded-md mb-3 lg:max-w-[600px]'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center min-w-0 mr-5'>
                    <p className='text-lg font-bold mr-3'>{cityName}</p>
                    <div className='flex relative items-center text-slate-400 flex-1 min-w-0'>
                        <p className='text-lg font-thin mr-1 truncate'>{country}</p>
                        <FaLocationArrow size='14px' />
                        <a style={{ contentVisibility: 'hidden' }}
                            rel='noreferrer' target="_blank"
                            className='absolute w-full h-full'
                            aria-label={`Go to ${country} on maps`}
                            href={`https://www.google.com/maps/place/${cityName}`}>
                            Go to {country} on maps
                        </a>
                    </div>
                </div>
                <div className='flex items-center min-w-fit'>
                    <p className={shortWeatherStyles}>{shortWeather}</p>
                    <img alt={shortWeather} src={iconURL} className='w-10' />
                </div>
            </div>
        </div>
    )
}
