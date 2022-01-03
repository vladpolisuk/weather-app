import axios from 'axios';

export const API_KEY = '236c75055b974355b82175426213112';

export const weatherInstance = axios.create({
	baseURL: `https://api.weatherapi.com/v1`,
});

export const weatherWallpaperInstance = axios.create({
	baseURL: `https://source.unsplash.com/random`,
});
