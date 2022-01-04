import React from 'react'
import { WeatherCity } from './preview-city/WeatherCity'
import { WeatherLogo } from './preview-logo/WeatherLogo'

const WeatherPreview = () => {
    const previewStyles = `w-full flex flex-col items-center xl:items-start 
            xl:container xl:mx-auto justify-between xl:max-w-3xl px-4`

    return (
        <div className={previewStyles}>
            <WeatherLogo />
            <WeatherCity />
        </div>
    )
}

export default WeatherPreview
