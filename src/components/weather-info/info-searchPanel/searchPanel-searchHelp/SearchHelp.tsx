import React, { FC, HTMLAttributes, MouseEvent, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../../hooks/redux';
import { getSimilarCityNames } from '../../../../store/searchReducer/reducer';
import { getSearchResponseError, getSearchSilimarCityNames } from '../../../../store/searchReducer/selectors';
import { WithCustomSkeleton } from '../../../weather-withCustomSkeleton/WithCustomSkeleton';
import { SimilarCityName } from './searchHelp-similarCityName/SimilarCityName';
import { SearchHelpSkeleton } from './SearchHelpSkeleton';

interface Props extends HTMLAttributes<HTMLButtonElement> {
    isActive: boolean;
    inputText: string;
    onSubmit: (values: any) => void;
}

export const SearchHelp: FC<Props> = ({ isActive, inputText, onSubmit, onBlur }) => {
    const dispatch = useDispatch();
    const responseError = useAppSelector(getSearchResponseError);
    const sililarCityNames = useAppSelector(getSearchSilimarCityNames);

    useEffect(() => {
        if (inputText) dispatch(getSimilarCityNames(inputText));
    }, [dispatch, inputText]);

    const searchHelpStyles = `absolute left-0 py-2 ml-2 mr-2 mt-2 rounded 
            w-[-webkit-fill-available] bg-[#0c0c0ceb] backdrop-blur-md`

    const similarCitiesStyles = `bg-white/5 py-[1px] flex flex-col 
            items-center justify-start`

    const similarCityNamesComponents = sililarCityNames.map(({ cityName, country }) => {
        const handleClick = (event: MouseEvent<HTMLButtonElement>) => onSubmit({ cityName: cityName });

        return <SimilarCityName
            onBlur={onBlur}
            country={country}
            cityName={cityName}
            onClick={handleClick}
            key={`similar_city_name_${Date.now() * Math.random()}`} />
    })

    const isExistSimilarCityNames = (
        <div id='searchHelp' className={searchHelpStyles}>
            <WithCustomSkeleton
                condition={!responseError}
                skeleton={<SearchHelpSkeleton />}>
                <ul id='similarCities'
                    className={similarCitiesStyles}>
                    {similarCityNamesComponents}
                </ul>
            </WithCustomSkeleton>
        </div>
    )


    return isActive ? isExistSimilarCityNames : null;
}