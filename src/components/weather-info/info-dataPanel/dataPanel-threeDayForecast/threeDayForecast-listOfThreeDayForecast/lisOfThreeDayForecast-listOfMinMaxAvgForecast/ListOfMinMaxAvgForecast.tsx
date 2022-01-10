import React, { FC } from 'react'
import { FaArrowDown, FaArrowUp, FaSort } from 'react-icons/fa'
import { MinMaxAvgForecast } from '../../../../../../store/forecastReducer/models'

interface Props {
    minMaxAvgForecast: MinMaxAvgForecast[];
}

export const ListOfMinMaxAvgForecast: FC<Props> = ({ minMaxAvgForecast }) => {
    const lisOfMinMaxAvgForecast = minMaxAvgForecast.map(({
        iconUrl,
        hourTime,
        shortWeather,
        temperatureC,
        temperatureScale
    }) => {
        let temperatureScaleIcon;
        if (temperatureScale === 'Min') temperatureScaleIcon = <FaArrowDown className='text-blue-500 mr-1 w-[15px] h-[15px]' />;
        if (temperatureScale === 'Avg') temperatureScaleIcon = <FaSort className='text-yellow-500 mr-1 w-[15px] h-[15px]' />;
        if (temperatureScale === 'Max') temperatureScaleIcon = <FaArrowUp className='text-red-500 mr-1 w-[15px] h-[15px]' />;

        const forecastStyles = `flex items-center justify-between bg-black/10 w-full 
                sm-1 mb-1 sm:mb-2 rounded px-2 py-1 hover:bg-black/20 active:bg-black/20`

        return (
            <li key={`forecast_${hourTime}_${shortWeather}`} className={forecastStyles}>
                <div className='flex items-center'>
                    <img src={iconUrl} alt={shortWeather} className='w-7 h-7 sm:w-10 sm:h-10 mr-1' />
                    <p className='mr-2 text-slate-100 text-[15px]'>{temperatureScale}:</p>
                    {temperatureScaleIcon}
                    <p className='text-[15px] sm:text-base'>{temperatureC}°C</p>
                </div>
                <time dateTime={hourTime} className='text-[15px] sm:text-base'>
                    {hourTime}
                </time>
            </li>
        )
    })

    return <>{lisOfMinMaxAvgForecast}</>
}
