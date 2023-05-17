import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { chatlistReducer } from '@/features/chatlist/slice';
import { contactsReducer } from '@/features/contacts/slice';
import { contactReducer } from '@/features/contact/slice';
import { notificationsReducer } from '@/features/notifications/slice';

const rootReducer = combineReducers({
  chatlist: chatlistReducer,
  contacts: contactsReducer,
  contact: contactReducer,
  notifications: notificationsReducer,
});

const persistConfig = {
  key: 'green-api',
  version: 1,
  storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    })
});

const persistor = persistStore(store);

export { store, persistor }

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
