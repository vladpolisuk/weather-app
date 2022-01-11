import axios from 'axios';

export const API_KEY = '236c75055b974355b82175426213112';
export const GEOCODE_ACCESS_TOKEN = 'pk.ae35537228495b7708b98d774897a57b';

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
