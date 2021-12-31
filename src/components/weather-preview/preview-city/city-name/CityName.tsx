import React, { FC } from 'react'

interface Props {
    name: string;
}

export const CityName: FC<Props> = ({ name }) => {
    return (
        <h2 className='text-shadow-name text-7xl font-bold leading-normal'>
            {name}
        </h2>
    )
}
