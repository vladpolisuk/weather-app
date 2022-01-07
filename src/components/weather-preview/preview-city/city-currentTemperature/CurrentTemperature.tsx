import React, { FC } from 'react'

interface Props {
    temp: number;
}

export const CurrentTemperature: FC<Props> = ({ temp }) => {
    return (
        <div className='flex items-center justify-center bg-blue-900 px-2 mt-3 xs:mt-0'>
            <p className='font-bold leading-1 text-2xl'>
                {temp}°C
            </p>
        </div>
    )
}
