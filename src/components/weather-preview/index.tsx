import React from 'react'
import { WeatherCity } from './preview-city/WeatherCity'
import { WeatherLogo } from './preview-logo/WeatherLogo'

const WeatherPreview = () => {
    const previewStyles = `w-full flex flex-col justify-between items-center 
            xl:items-start xl:container xl:mx-auto xl:max-w-3xl px-4`

    return (
        <div className={previewStyles}>
            <WeatherLogo />
            <WeatherCity />
        </div>
    )
}

export default WeatherPreview
