import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatlistReducers } from '@/features/chatlist/slice';

const rootReducer = combineReducers({
  chatlist: chatlistReducers,
});


const store = configureStore({
  reducer: rootReducer,
});

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
