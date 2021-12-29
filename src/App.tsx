import React from 'react';
import WeatherInfo from './components/weather-info';
import WeatherPreview from './components/weather-preview';
import WeatherWallpaper from './components/weather-wallpaper';

const App = () => {
	return (
		<WeatherWallpaper>
			<WeatherPreview />
			<WeatherInfo />
		</WeatherWallpaper>
	);
}

export default App;
