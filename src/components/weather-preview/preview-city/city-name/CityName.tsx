import React, { FC } from 'react'

interface Props {
    name: string;
}

export const CityName: FC<Props> = ({ name }) => {
    const cityNameStyles = `text-shadow-name text-5xl xs:text-6xl text-center 
            xs:text-left md:text-7xl font-extrabold leading-normal xl:mr-2`

    return (
        <h2 className={cityNameStyles}>
            {name}
        </h2>
    )
}
