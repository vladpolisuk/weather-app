import React from 'react'

export const TodayForecastSkeleton = () => {
    return (
        <div className='flex flex-col animate-pulse bg-white/20 w-full rounded-md px-5 py-3'>
            <div className='flex items-center justify-between mb-3'>
                <div className='animate-pulse w-20 h-7 bg-white/30 rounded'></div>
                <div className='flex items-center justify-center w-fit'>
                    <div className='animate-pulse bg-white/30 w-10 h-7 rounded mr-2'></div>
                    <div className='animate-pulse bg-white/30 w-10 h-7 rounded'></div>
                </div>
            </div>
            <div className='flex flex-col'>
                <div className='animate-pulse bg-white/30 w-full h-10 rounded-md mb-3'></div>
                <div className='animate-pulse bg-white/30 w-full h-10 rounded-md mb-3'></div>
                <div className='animate-pulse bg-white/30 w-full h-10 rounded-md'></div>
            </div>
        </div>
    )
}
