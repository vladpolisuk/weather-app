import React from 'react'

export const ThreeDaysForecastSkeleton = () => {
    return (
        <div className='flex flex-col items-center animate-pulse bg-white/20 w-full rounded px-5 py-3'>
            <div className='flex itemse-center justify-between w-full mb-3'>
                <div className='animate-pulse bg-white/30 h-6 w-20 rounded-md'></div>
                <div className='animate-pulse bg-white/30 h-6 w-6 rounded-md'></div>
            </div>
            <div className='w-full animate-pulse h-12 bg-white/20 rounded px-3 py-2 mb-2'></div>
            <div className='w-full animate-pulse h-12 bg-white/20 rounded px-3 py-2 mb-2'></div>
            <div className='w-full animate-pulse h-12 bg-white/20 rounded px-3 py-2 mb-2'></div>
        </div>
    )
}
