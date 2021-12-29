import React from 'react'

const WeatherPreview = () => {
    return (
        <div className='w-full container mx-auto max-w-3xl px-4'>
            <div className='mt-10'>
                <a href='/' aria-label='Go weather app' className='inline-block pb-4 pr-5 
                    active:text-slate-200 hover:text-slate-200 transition ease-in-out'>
                    <h1 className='font-bold tracking-wide'>
                        GOWeather
                    </h1>
                </a>
            </div>
        </div>
    )
}

export default WeatherPreview
