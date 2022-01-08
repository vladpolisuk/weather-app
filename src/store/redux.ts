import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { forecastReducer } from './forecastReducer/reducer';
import { weatherReducer } from './weatherReducer/reducer';

export const rootReducer = combineReducers({
	weather: weatherReducer,
	forecast: forecastReducer,
});

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));
