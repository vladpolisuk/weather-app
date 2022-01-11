import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { forecastReducer } from './forecastReducer/reducer';
import { searchReducer } from './searchReducer/reducer';
import { weatherReducer } from './weatherReducer/reducer';

export const rootReducer = combineReducers({
	weather: weatherReducer,
	forecast: forecastReducer,
	search: searchReducer,
});

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const devTools = process.env.NODE_ENV === "production"
    ? applyMiddleware(thunkMiddleware)
    : composeWithDevTools(applyMiddleware(thunkMiddleware));

export const store = createStore(rootReducer, devTools);
