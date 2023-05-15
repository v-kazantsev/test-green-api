import { TypedUseSelectorHook } from 'react-redux';
import { useSelector as selectorHook } from 'react-redux/es/hooks/useSelector';
import { RootState } from '@/store/store';

export const useAppSelector: TypedUseSelectorHook<RootState> = selectorHook;
