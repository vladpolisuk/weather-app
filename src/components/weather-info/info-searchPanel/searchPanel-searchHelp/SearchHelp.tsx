import React, { FC, HTMLAttributes, KeyboardEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../hooks/redux';
import { getSimilarCityNames } from '../../../../store/searchReducer/reducer';
import { getSearchSilimarCityNames } from '../../../../store/searchReducer/selectors';
import { WithCustomSkeleton } from '../../../weather-withCustomSkeleton/WithCustomSkeleton';
import { SearchHelpSkeleton } from './SearchHelpSkeleton';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    inputText: string;
    onSubmit: (values: any) => void;
}

export const SearchHelp: FC<Props> = ({ isActive, inputText, onSubmit, onBlur }) => {
    const dispatch = useDispatch();
    const sililarCityNames = useAppSelector(getSearchSilimarCityNames);

    const onSearchBySimilarCityName = (similarCityName: string) => onSubmit({ cityName: similarCityName })

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
    }

    useEffect(() => {
        if (inputText) dispatch(getSimilarCityNames(inputText));
    }, [dispatch, inputText]);

    const searchHelpStyles = `absolute left-0 py-2 ml-2 mr-2 mt-2 rounded 
            w-[-webkit-fill-available] bg-[#0c0c0ceb] backdrop-blur-md`

    const similarCitiesStyles = `bg-white/5 py-[1px] flex flex-col items-center justify-start`

    const similarCityNameButtonStyles = `outline-none flex items-center justify-between 
            w-full px-4 py-2 focus:bg-white/10 hover:bg-white/10 active:bg-white/10`

    const searchHelpOptionStyles = `w-full bg-black/70 mb-[1px]`

    const similarCityNamesComponents = sililarCityNames.map(({ cityName, country }) => {
        return (
            <li className={searchHelpOptionStyles}
                key={`similar_city_name_${Date.now() * Math.random()}`}>
                <button
                    type='submit'
                    onBlur={onBlur}
                    onKeyDown={onKeyDown}
                    className={similarCityNameButtonStyles}
                    aria-label={`find ${cityName}, ${country}`}
                    onClick={(event) => onSearchBySimilarCityName(cityName)}>
                    <p className='mr-2'>{cityName}</p>
                    <p className='text-white/70'>{country}</p>
                </button>
            </li>
        )
    })

    const isExistSimilarCityNames = isActive ? (
        <div id='searchHelp' className={searchHelpStyles}>
            <WithCustomSkeleton
                condition={!!similarCityNamesComponents.length}
                skeleton={<SearchHelpSkeleton />}>
                <ul id='similarCities'
                    className={similarCitiesStyles}>
                    {similarCityNamesComponents}
                </ul>
            </WithCustomSkeleton>
        </div>
    ) : null

    return isExistSimilarCityNames;
}