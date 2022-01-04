import { Formik } from 'formik';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { getWeatherByCityName } from '../../../store/weatherReducer/reducer';

export const SearchPanel = () => {
    const dispatch = useDispatch();

    const onSubmit = (values: { cityName: string }) => {
        dispatch(getWeatherByCityName(values.cityName))
    }

    const inputStyles = `hover:bg-black/70 active:shadow-[0_0_0_2px_#505050] focus:shadow-[0_0_0_2px_#454545] 
                        outline-none ease-in-out px-5 py-1 pb-[6px] bg-black/50 w-full sticky transition
                        top-0 rounded-full mr-2`

    const buttonStyles = `bg-black/50 w-10 h-10 flex items-center min-w-100% transition easy-in-out 
                        justify-center rounded-full hover:shadow-[0_0_0_2px_#454545] focus:shadow-[0_0_0_2px_#454545] 
                        outline-none hover:bg-black/70 active:scale-95 active:shadow-[0_0_0_2px_#505050]`

    return (
        <Formik initialValues={{ cityName: '' }} onSubmit={onSubmit} >
            {({ handleSubmit, handleChange, handleBlur, values }) => (
                <form onSubmit={handleSubmit} className='flex align-items justify-between pt-10 px-8 pb-6'>
                    <input
                        type='search'
                        name='cityName'
                        autoComplete='off'
                        onBlur={handleBlur}
                        className={inputStyles}
                        value={values.cityName}
                        onChange={handleChange}
                        aria-label='Search for place'
                        placeholder='Search for place ...' />
                    <div>
                        <button
                            type='submit'
                            aria-label='go search'
                            className={buttonStyles}>
                            <FaSearch />
                        </button>
                    </div>
                </form>
            )}
        </Formik >
    )
}
