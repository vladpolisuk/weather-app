import React, { FC } from 'react'

interface Props {
    weather: string;
}

export const CityShortWeather: FC<Props> = ({ weather }) => {
    return (
        <div className='bg-black/40 border-2 h-[26px] rounded-md inline-block h-full px-[8px]'>
            <p className='leading-[1.2]'>
                {weather}
            </p>
        </div>
    )
}
