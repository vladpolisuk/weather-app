import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../hooks/redux";
import { getRandomWeatherData } from "../../store/weatherReducer/reducer";
import { getWeatherWallpaperUrl } from "../../store/weatherReducer/selectors";

const WeatherWallpaper: FC = ({ children }) => {
    const dispatch = useDispatch()
    const wallpaperUrl = useAppSelector(getWeatherWallpaperUrl)

    useEffect(() => {
        dispatch(getRandomWeatherData())
    }, [dispatch])

    return (
        <div style={{ backgroundImage: wallpaperUrl ? `url(${wallpaperUrl})` : '' }}
            className="bg-black/70 bg-cover object-cover bg-no-repeat bg-center bg-origin-border">
            <div className='grid xl:grid-cols-[5fr_3fr] bg-black/50 
                grid-cols-[1fr] w-screen h-screen text-white'>
                {children}
            </div>
        </div>
    )
}

export default WeatherWallpaper
