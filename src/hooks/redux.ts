import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { AppState } from '../store/models';

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
