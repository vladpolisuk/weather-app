import React, { MouseEvent, useState } from 'react'
import { SecretRoomPage } from './secretRoom-secretRoomPage/SecretRoomPage'

export const SecretRoom = () => {
    const [isOpenSecretRoom, setIsOpenSecretRoom] = useState(false)

    const onOpenSecretRoom = (event: MouseEvent<HTMLButtonElement>) => {
        let wallpaper = document.getElementById('wallpaper') as HTMLElement;
        wallpaper.scrollTop = 0
        wallpaper.style.overflow = 'hidden';
        const weatherInfo = document.getElementById('weatherInfo') as HTMLElement;
        weatherInfo.style.position = 'absolute';
        setIsOpenSecretRoom(true)
    }

    const onCloseSecretRoom = (event: MouseEvent<HTMLButtonElement>) => {
        setIsOpenSecretRoom(false)
        let wallpaper = document.getElementById('wallpaper') as HTMLElement;
        wallpaper.style.overflow = 'overlay';
        const weatherInfo = document.getElementById('weatherInfo') as HTMLElement;
        weatherInfo.style.position = 'relative';
    }

    const openSecretRoomButtonStyles = `outline-none w-full bg-black/20 active:bg-black/30 
            focus:shadow-[0_0_0_2px_#333] hover:shadow-[0_0_0_2px_#333] hover:bg-black/30 
            active:scale-[0.99] active:shadow-[0_0_0_2px_#333] rounded transition 
            easy-in-out px-4 py-2`

    return <>
        <SecretRoomPage
            isOpen={isOpenSecretRoom}
            onClose={onCloseSecretRoom} />
        <button
            onClick={onOpenSecretRoom}
            className={openSecretRoomButtonStyles}>
            Open Secret Room
        </button>
    </>
}
