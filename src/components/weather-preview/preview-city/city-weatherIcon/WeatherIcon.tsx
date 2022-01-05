import React, { FC } from 'react'

interface Props {
    iconUrl: string;
    description?: string;
}

export const WeatherIcon: FC<Props> = ({ iconUrl, description }) => {
    return (
        <div aria-label={description} className='w-[80px] h-[70px] bg-no-repeat bg-center bg-cover'
            style={{ backgroundImage: `url(${iconUrl})` }}>
        </div>
    )
}
