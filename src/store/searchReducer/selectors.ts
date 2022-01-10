import { AppState } from '../models';

export const getSearchSilimarCityNames = (state: AppState) => {
	return state.search.similarCityNames;
};

export const getSearchResponseError = (state: AppState) => {
	return state.search.responseError;
};
