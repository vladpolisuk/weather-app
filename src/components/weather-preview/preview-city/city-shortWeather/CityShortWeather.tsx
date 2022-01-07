import React, { FC } from 'react'

interface Props {
    weather: string;
}

export const CityShortWeather: FC<Props> = ({ weather }) => {
    const shortWeatherStyles = `flex items-center justify-center bg-black/40 
            border-2 h-[28px] rounded-md h-full px-[8px] xs:mr-2`

    return (
        <div className={shortWeatherStyles}>
            <p>{weather}</p>
        </div>
    )
}
