import React, { FC } from 'react'

interface Props {
    name: string;
}

export const CityName: FC<Props> = ({ name }) => {
    return (
        <h2 className='text-shadow-name text-7xl 
            font-extrabold leading-normal mr-2'>
            {name}
        </h2>
    )
}
