import { searchAPI } from '../../api/api-search/searchAPI';
import { ThunkType } from '../models';
import { searchActions, SearchActions, SearchActionsType } from './actions';
import { SearchReducer, SearchState } from './models';

export const initialState: SearchState = {
	similarCityNames: [],
};

export const searchReducer: SearchReducer = (state = initialState, action) => {
	switch (action.type) {
		case SearchActions.SET_SIMILAR_CITY_NAMES:
			return { ...state, similarCityNames: action.payload };

		default:
			return state;
	}
};

export const getSimilarCityNames = (cityName: string): ThunkType<SearchActionsType> => {
	return async (dispatch) => {
		const similarCityNames = await searchAPI.getSimilarCityNamesByCityName(cityName);
		dispatch(searchActions.setSimilarCityNames(similarCityNames));
	};
};
