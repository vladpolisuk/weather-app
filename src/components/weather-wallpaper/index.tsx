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

    const parentStyles = `h-auto bg-fixed bg-black/70 bg-cover overflow-auto 
                object-cover bg-no-repeat bg-center bg-origin-border lg:overflow-hidden`

    const childrenStyles = `h-full grid bg-black/50 grid-cols-[1fr] overflow-hidden
                text-white lg:w-screen lg:h-screen lg:grid-cols-[5fr_3fr]`

    const backgroundImage = wallpaperUrl ? `url(${wallpaperUrl})` : '';

    return (
        <main id='wallpaper'
            className={parentStyles}
            style={{ backgroundImage }}>
            <div className={childrenStyles}>
                {children}
            </div>
        </main>
    )
}

export default WeatherWallpaper
