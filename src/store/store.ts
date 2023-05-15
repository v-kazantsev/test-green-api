import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { chatlistReducer } from '@/features/chatlist/slice';
import { contactsReducer } from '@/features/contacts/slice';

const rootReducer = combineReducers({
  chatlist: chatlistReducer,
  contacts: contactsReducer
});


const store = configureStore({
  reducer: rootReducer,
});

export { store }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
