// Импорт функций createSlice и isAnyOf из библиотеки '@reduxjs/toolkit'
import { createSlice, isAnyOf } from '@reduxjs/toolkit';
// Импорт асинхронных Thunk-действий fetchContacts, addContacts, deleteContacts из файла './operations'
import { fetchContacts, addContacts, deleteContacts } from './operations';

// Определение массива extraActions, содержащего асинхронные Thunk-действия
const extraActions = [fetchContacts, addContacts, deleteContacts];

// Определение функции getActions, которая возвращает условие isAnyOf для указанного типа действия
const getActions = type => isAnyOf(...extraActions.map(action => action[type]));

// Начальное состояние для slice contactsSlice
const initialState = { items: [], isLoading: false, error: null };

// Создание slice для управления контактами
const contactsSlice = createSlice({
  name: 'contacts', // Уникальное имя для slice
  initialState, // Начальное состояние slice
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, (state, action) => {
        // Обработка успешного выполнения fetchContacts
        state.items = action.payload; // Обновление списка контактов в состоянии
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        // Обработка успешного выполнения addContacts
        state.items.unshift(action.payload); // Добавление нового контакта в начало списка контактов в состоянии
      })
      .addCase(deleteContacts.fulfilled, (state, action) => {
        // Обработка успешного выполнения deleteContacts
        const index = state.items.findIndex(
          contact => contact.id === action.payload.id
        );
        state.items.splice(index, 1); // Удаление контакта из списка контактов в состоянии
      })
      .addMatcher(getActions('pending'), state => {
        // Обработка действий со статусом 'pending' (ожидание)
        state.isLoading = true; // Установка флага isLoading в состоянии
      })
      .addMatcher(getActions('rejected'), (state, action) => {
        // Обработка действий со статусом 'rejected' (отклонено)
        state.isLoading = false; // Сброс флага isLoading в состоянии
        state.error = action.payload; // Установка сообщения об ошибке в состоянии
      })
      .addMatcher(getActions('fulfilled'), state => {
        // Обработка действий со статусом 'fulfilled' (выполнено)
        state.isLoading = false; // Сброс флага isLoading в состоянии
        state.error = null; // Сброс сообщения об ошибке в состоянии
      }),
});

// Экспорт действий addContact и deleteContact из slice contactsSlice
export const { addContact, deleteContact } = contactsSlice.actions;

// Экспорт редуктора (reducer) contactsReducer из slice contactsSlice
export const contactsReducer = contactsSlice.reducer;
