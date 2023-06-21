import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';

// Создание хранилища Redux с помощью configureStore
export const store = configureStore({
  reducer: {
    contacts: contactsReducer, // Редюсер для управления состоянием контактов
    filter: filterReducer, // Редюсер для управления состоянием фильтра
  },

  // Применение middleware с помощью getDefaultMiddleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Создание персистентного хранилища, которое сохраняет состояние хранилища Redux при перезагрузке страницы
export const persistor = persistStore(store);
