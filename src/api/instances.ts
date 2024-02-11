import axios from 'axios';

export const API_KEY = '236c75055b974355b82175426213112';
export const GEOCODE_ACCESS_TOKEN = 'pk.3df8884c186577a7e7ea4ed6e0d0e228';

export const baseInstance = axios.create({
	baseURL: `https://api.weatherapi.com/v1`,
	params: { key: API_KEY },
});

export const geocodeInstanse = axios.create({
	baseURL: `https://eu1.locationiq.com/v1`,
	params: { key: GEOCODE_ACCESS_TOKEN, format: 'json' },
});

export const weatherWallpaperInstance = axios.create({
	baseURL: `https://source.unsplash.com/random`,
});
