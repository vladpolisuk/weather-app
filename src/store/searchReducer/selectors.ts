import { AppState } from '../models';

export const getSearchSilimarCityNames = (state: AppState) => {
	return state.search.similarCityNames;
};
