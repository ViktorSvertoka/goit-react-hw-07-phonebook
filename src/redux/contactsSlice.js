import { createSlice, nanoid } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Исходные контакты телефона
const phoneContacts = {
  items: [
    { id: 'id-1', name: 'Steve Jobs', number: '459-12-56' },
    { id: 'id-2', name: 'Bill Gates', number: '443-89-12' },
    { id: 'id-3', name: 'Elon Musk', number: '645-17-79' },
    { id: 'id-4', name: 'Mark Zuckerberg', number: '227-91-26' },
  ],
};

// Создание slice контактов с использованием createSlice
const contactsSlice = createSlice({
  name: 'contacts', // Имя slice контактов
  initialState: phoneContacts, // Начальное состояние контактов
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload); // Добавление нового контакта в список контактов
      },
    },
    prepare(newContact) {
      return {
        payload: { id: nanoid(), ...newContact }, // Подготовка данных для добавления контакта с уникальным идентификатором
      };
    },
    removeContact(state, action) {
      const index = state.items.findIndex(
        contact => contact.id !== action.payload
      );
      state.items.splice(index, 1); // Удаление контакта из списка контактов
    },
  },
});

// Экспорт действий addContact и removeContact из slice контактов
export const { addContact, removeContact } = contactsSlice.actions;

// Создание персистентного редьюсера для сохранения состояния контактов с использованием redux-persist
export const contactsReducer = persistReducer(
  { key: 'contacts', storage },
  contactsSlice.reducer
);
