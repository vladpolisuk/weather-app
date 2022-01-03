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

    return (
        <Formik initialValues={{ cityName: '' }} onSubmit={onSubmit} >
            {({ handleSubmit, handleChange, handleBlur, values }) => (
                <form onSubmit={handleSubmit} className='flex align-items justify-between pt-10 px-8 pb-6'>
                    <input
                        type='search'
                        name='cityName'
                        autoComplete='off'
                        onBlur={handleBlur}
                        value={values.cityName}
                        onChange={handleChange}
                        aria-label='Search for place'
                        placeholder='Search for place ...'
                        className='transition ease-in-out px-5 py-1 pb-[6px] 
                        bg-transparent bg-black/50 w-full sticky top-0 rounded-full mr-2' />
                    <div>
                        <button
                            type='submit'
                            aria-label='go search'
                            className='bg-black/50 w-10 h-10 flex items-center 
                            min-w-100% transition easy-in-out justify-center rounded-full
                            hover:shadow-[0_0_0_2px_#393939] hover:bg-black/70 active:scale-95'>
                            <FaSearch />
                        </button>
                    </div>
                </form>
            )}
        </Formik >
    )
}
