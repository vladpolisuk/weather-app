import axios from 'axios';

export const API_KEY = '236c75055b974355b82175426213112';

export const baseInstance = axios.create({
	baseURL: `https://api.weatherapi.com/v1`,
	params: { key: API_KEY },
});

export const weatherWallpaperInstance = axios.create({
	baseURL: `https://source.unsplash.com/random`,
});
