import React, { FC } from "react"

const WeatherWallpaper: FC = ({ children }) => {
    const image = 'https://images.unsplash.com/photo-1500740516770-92bd004b996e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80';

    return (
        <div
            style={{ backgroundImage: `url(${image})` }}
            className='w-screen bg-cover object-cover bg-no-repeat bg-center 
            bg-origin-border text-white grid grid-cols-[5fr_3fr] h-screen'>
            {children}
        </div>
    )
}

export default WeatherWallpaper
