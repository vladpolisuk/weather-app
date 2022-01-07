import React, { FC } from 'react'

interface Props {
    date: string;
    time: string;
}

export const CityDate: FC<Props> = ({ date, time }) => {
    const dateStyles = `rounded-l-full bg-white flex 
            items-center justify-center px-3 pl-4 py-[2px] mr-1`;

    const timeStyles = `rounded-r-full bg-white 
            flex items-center justify-center px-3 pr-4 py-[2px]`

    return (
        <div className='flex mb-3 xs:mr-2 xs:mb-0'>
            <div className={dateStyles}>
                <p className='text-[14px] leading-6 font-bold text-black/80'>
                    {date}
                </p>
            </div>
            <div className={timeStyles}>
                <p className='text-[14px] leading-6 font-bold text-black/80'>
                    {time}
                </p>
            </div>
        </div>
    )
}
