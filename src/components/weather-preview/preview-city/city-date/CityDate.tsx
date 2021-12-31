import React, { FC } from 'react'

interface Props {
    date: string;
    time: string;
}

export const CityDate: FC<Props> = ({ date, time }) => {
    return (
        <div className='flex mr-2'>
            <div className='rounded-l-full bg-white pb-[2px] px-3 mr-1 border-2-blac'>
                <p className='text-md font-bold text-black/80'>
                    {date}
                </p>
            </div>
            <div className='rounded-r-full bg-white pb-[2px] px-3'>
                <p className='text-md font-bold text-black/80'>
                    {time}
                </p>
            </div>
        </div>
    )
}
