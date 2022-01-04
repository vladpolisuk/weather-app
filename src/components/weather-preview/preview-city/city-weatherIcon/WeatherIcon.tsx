import React, { FC } from 'react'

interface Props {
    iconUrl: string;
    description?: string;
}

export const WeatherIcon: FC<Props> = ({ iconUrl, description }) => {
    return <img src={iconUrl} alt={description} className='hidden xs:block xs:w-20 md:w-24 mt-3' />
}
