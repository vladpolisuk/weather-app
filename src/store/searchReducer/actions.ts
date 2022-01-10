import { InferActionsTypes } from '../models';
import { SimilarCityNames } from './models';

export enum SearchActions {
	SET_SIMILAR_CITY_NAMES = 'SET_SIMILAR_CITY_NAMES',
}

export const searchActions = {
	setSimilarCityNames: (similarCityNames: SimilarCityNames) =>
		({ type: SearchActions.SET_SIMILAR_CITY_NAMES, payload: similarCityNames } as const),
};

export type SearchActionsType = InferActionsTypes<typeof searchActions>;
