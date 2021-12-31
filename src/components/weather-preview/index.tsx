import React from 'react'
import { WeatherCity } from './preview-city/WeatherCity'
import { WeatherLogo } from './preview-logo/WeatherLogo'

const WeatherPreview = () => {
    return (
        <div className='w-full flex flex-col items-center xl:items-start 
            xl:container xl:mx-auto justify-between xl:max-w-3xl px-4'>
            <WeatherLogo />
            <WeatherCity />
        </div>
    )
}

export default WeatherPreview
