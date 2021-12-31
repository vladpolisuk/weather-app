import React, { FC } from 'react'

interface Props {
    icon?: JSX.Element;
}

export const WeatherIcon: FC<Props> = ({ icon }) => {
    return (
        <div>
            {icon}
        </div>
    )
}
