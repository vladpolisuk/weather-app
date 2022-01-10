import React, { FC, HTMLAttributes, KeyboardEvent } from 'react'

interface Props extends HTMLAttributes<HTMLButtonElement> {
    cityName: string;
    country: string;
}

export const SimilarCityName: FC<Props> = ({ cityName, country, ...buttonProps }) => {
    const onFocusSearchInput = (event: KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault();
        const searchInput = document.getElementById('searchInput');
        searchInput?.focus();
    }

    const onArrowDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const similarCities = document.getElementById('similarCities');
        const parentLiElement = event.currentTarget.parentNode
        const nextLiElement = parentLiElement?.nextSibling;
        if (nextLiElement) (nextLiElement.firstChild as HTMLElement).focus()
        else (similarCities?.firstChild?.firstChild as HTMLElement).focus();
    }

    const onArrowUp = (event: KeyboardEvent<HTMLButtonElement>) => {
        event.preventDefault()
        const similarCities = document.getElementById('similarCities');
        const parentLiElement = event.currentTarget.parentNode
        const prevLiElement = parentLiElement?.previousSibling
        if (prevLiElement) (prevLiElement.firstChild as HTMLElement).focus()
        else (similarCities?.lastChild?.firstChild as HTMLElement).focus();
    }

    const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'ArrowDown') onArrowDown(event)
        else if (event.key === 'ArrowUp') onArrowUp(event)
        else if (event.keyCode === 8) onFocusSearchInput(event)
    }

    const similarCityNameButtonStyles = `outline-none w-full px-4 py-2 
            focus:bg-white/10 hover:bg-white/10 active:bg-white/10`

    const searchHelpOptionStyles = `w-full bg-black/70 mb-[1px]`

    return (
        <li className={searchHelpOptionStyles}>
            <button
                type='submit'
                {...buttonProps}
                onKeyDown={onKeyDown}
                className={similarCityNameButtonStyles}
                aria-label={`find ${cityName}, ${country}`}>
                <span className='max-w-full flex items-center justify-start'>
                    <p className='mr-2 whitespace-nowrap'>{cityName},</p>
                    <p className='text-white/70 truncate'>
                        {country}
                    </p>
                </span>
            </button>
        </li>
    )
}
