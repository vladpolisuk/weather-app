import React, { FC } from 'react'

interface Props {
    date: string;
    time: string;
}

export const CityDate: FC<Props> = ({ date, time }) => {
    return (
        <div className='flex mb-3 xs:mr-2 xs:mb-0'>
            <div className='rounded-l-full bg-white pb-[1px] md:pb-[2px] pl-3 pr-2 md:px-3 mr-1'>
                <p className='text-[14px] leading-[1.7] md:leading-[1.8] font-bold text-black/80'>
                    {date}
                </p>
            </div>
            <div className='rounded-r-full bg-white pb-[2px] pr-3 pl-2 md:px-3'>
                <p className='text-[14px] leading-[1.7] md:leading-[1.8] font-bold text-black/80'>
                    {time}
                </p>
            </div>
        </div>
    )
}
