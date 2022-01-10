import { Formik } from 'formik';
import React, { KeyboardEvent, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../../hooks/redux';
import { getWeatherByCityName } from '../../../store/weatherReducer/reducer';
import { getWeatherCityName } from '../../../store/weatherReducer/selectors';
import { SearchHelp } from './searchPanel-searchHelp/SearchHelp';
import { SearchInput } from './searchPanel-searchInput/SearchInput';

export const SearchPanel = () => {
    const dispatch = useDispatch();
    const cityName = useAppSelector(getWeatherCityName);
    const [isShowSearchHelp, setIsShowSearchHelp] = useState(false);

    const onActiveSearchHelp = (event: any) => {
        const isNotEmptyInput = !!event.target.value;
        setIsShowSearchHelp(isNotEmptyInput)
    }

    const onDisactiveSearchHelp = (event: any) => {
        const searchHelp = document.getElementById('searchHelp');
        if (event.relatedTarget) {
            const similarCitiesRelated = event.relatedTarget.parentNode.parentNode.parentNode;
            if (similarCitiesRelated === searchHelp) return;
        } else setIsShowSearchHelp(false)
    }

    const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'ArrowDown') {
            event.preventDefault();
            const similarCities = document.getElementById('similarCities');
            const firstSimilarCityName = (similarCities?.firstChild?.firstChild as HTMLElement);
            firstSimilarCityName.focus()
        }
    }

    const onSubmit = (values: { cityName: string }) => {
        setIsShowSearchHelp(false)
        if (values.cityName) dispatch(getWeatherByCityName(values.cityName))
    }

    const buttonStyles = `bg-black/50 min-w-[40px] h-10 flex items-center transition easy-in-out 
            justify-center rounded-full hover:shadow-[0_0_0_2px_#454545] focus:shadow-[0_0_0_2px_#454545] 
            outline-none hover:bg-black/70 active:scale-95 active:shadow-[0_0_0_2px_#505050]`

    const formStyles = `flex align-items justify-between h-[40px] box-content px-4 
            pt-8 pb-8 sm:px-8 lg:pt-10 lg:pb-6 lg:sticky lg:top-0`

    return (
        <Formik initialValues={{ cityName }} onSubmit={onSubmit} >
            {({ handleSubmit, handleChange, values: { cityName } }) => (
                <form style={{ zIndex: 100 }} onSubmit={handleSubmit} className={formStyles}>
                    <div className='relative w-full h-full mr-2'>
                        <SearchInput
                            value={cityName}
                            onKeyDown={onKeyDown}
                            onChange={handleChange}
                            onFocus={onActiveSearchHelp}
                            onInput={onActiveSearchHelp}
                            onBlur={onDisactiveSearchHelp} />
                        <SearchHelp
                            onSubmit={onSubmit}
                            inputText={cityName}
                            isActive={isShowSearchHelp}
                            onBlur={onDisactiveSearchHelp} />
                    </div>
                    <button
                        type='submit'
                        aria-label='go search'
                        className={buttonStyles}>
                        <FaSearch />
                    </button>
                </form>
            )}
        </Formik >
    )
}
