import React from 'react'

export const SearchPanel = () => {
    return (
        <div className='pt-10 px-8 pb-6'>
            <input aria-label='search for place' placeholder='search for place ...'
                className='transition ease-in-out px-5 py-1 pb-[6px]  
                bg-transparent bg-black/50 w-full sticky top-0 rounded-full' />
        </div>
    )
}
