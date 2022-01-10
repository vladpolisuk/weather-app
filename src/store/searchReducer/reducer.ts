import { searchAPI } from '../../api/api-search/searchAPI';
import { ThunkType } from '../models';
import { searchActions, SearchActions, SearchActionsType } from './actions';
import { SearchReducer, SearchState, SimilarCityNames } from './models';

const initialState: SearchState = {
	similarCityNames: [],
	responseError: '',
};

export const searchReducer: SearchReducer = (state = initialState, action): SearchState => {
	switch (action.type) {
		case SearchActions.SET_SIMILAR_CITY_NAMES:
			return { ...state, similarCityNames: action.payload };

		case SearchActions.SET_RESPONSE_ERROR:
			return { ...state, responseError: action.payload };

		default:
			return state;
	}
};

export const getSimilarCityNames = (cityName: string): ThunkType<SearchActionsType> => {
	return async (dispatch) => {
		let similarCityNames = await searchAPI.getSimilarCityNamesByCityName(cityName);

		if (similarCityNames !== 'Nothing found') {
			similarCityNames = similarCityNames as SimilarCityNames;
			dispatch(searchActions.setResponseError(''));
			dispatch(searchActions.setSimilarCityNames(similarCityNames));
		} else {
			dispatch(searchActions.setSimilarCityNames([]));
			dispatch(searchActions.setResponseError(similarCityNames));
		}
	};
};
