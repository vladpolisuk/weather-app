import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { rootReducer, store } from './redux';

type PropertiesTypes<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<
	PropertiesTypes<T>
>;

export type AppStore = typeof store;
export type AppDispath = AppStore['dispatch'];
export type AppThunkDispatch<A extends Action> = ThunkDispatch<AppState, unknown, A>;
export type AppState = ReturnType<typeof rootReducer>;
type BaseThunkType<A extends Action, R = Promise<any | void>> = ThunkAction<R, AppState, unknown, A>;
export type ThunkType<A extends Action> = BaseThunkType<A>;
