import React, { FC, HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLInputElement> {
    value: string;
}

export const SearchInput: FC<Props> = ({ value, ...inputProps }) => {
    const inputStyles = `hover:bg-black/70 active:shadow-[0_0_0_2px_#505050] py-1 
            focus:shadow-[0_0_0_2px_#454545] outline-none ease-in-out px-5 
            pb-[6px] bg-black/50 w-full h-full transition rounded-full`

    return (
        <input
            value={value}
            type='search'
            name='cityName'
            {...inputProps}
            id='searchInput'
            autoComplete='off'
            className={inputStyles}
            aria-label='Search for place'
            placeholder='Search for place ...' />
    )
}
