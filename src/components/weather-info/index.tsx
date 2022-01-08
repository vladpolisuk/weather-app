import React from 'react'
import { DataPanel } from './info-dataPanel/DataPanel';
import { SearchPanel } from './info-searchPanel/SearchPanel';

const WeatherInfo = () => {
    const infoStyles = `flex flex-col w-full lg:overflow-hidden shadow-lg bg-black/40 backdrop-blur-xl`

    return (
        <div className={infoStyles}>
            <SearchPanel />
            <DataPanel />
        </div>
    )
}

export default WeatherInfo;