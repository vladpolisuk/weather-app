import { SearchActionsType } from './actions';

export interface SearchState {
	similarCityNames: SimilarCityNames;
	responseError: string;
}

export type SimilarCityNames = SimilarCityName[];

export interface SimilarCityName {
	cityName: string;
	country: string;
}

export type SearchReducer = (state: SearchState | undefined, action: SearchActionsType) => SearchState;
