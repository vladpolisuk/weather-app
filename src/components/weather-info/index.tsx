import React from 'react'
import { DataPanel } from './info-dataPanel/DataPanel';
import { SearchPanel } from './info-searchPanel/SearchPanel';

const WeatherInfo = () => {
    return (
        <div className='w-full grid grid-rows-[1fr_8fr] 
            overflow-hidden shadow-lg bg-black/40 backdrop-blur-xl'>
            <SearchPanel />
            <DataPanel />
        </div>
    )
}

export default WeatherInfo;