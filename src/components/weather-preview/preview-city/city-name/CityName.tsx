import React, { FC } from 'react'

interface Props {
    name: string;
}

export const CityName: FC<Props> = ({ name }) => {
    const cityNameStyles = `text-shadow-name text-center text-[56px] leading-[1]
            font-extrabold xl:text-left text-5xl ml:text-[55px] xs:text-6xl md:text-7xl xl:mr-2`

    return (
        <h2 className={cityNameStyles}>
            {name}
        </h2>
    )
}
