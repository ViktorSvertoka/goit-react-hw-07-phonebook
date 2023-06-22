// Импорт функции createSelector из библиотеки '@reduxjs/toolkit'
import { createSelector } from '@reduxjs/toolkit';

// Функция selectIsLoading принимает объект состояния (state) и возвращает значение свойства isLoading из объекта состояния contacts.
export const selectIsLoading = state => state.contacts.isLoading;

// Функция selectError принимает объект состояния (state) и возвращает значение свойства error из объекта состояния contacts.
export const selectError = state => state.contacts.error;

// Функция selectContacts принимает объект состояния (state) и возвращает значение свойства items из объекта состояния contacts.
export const selectContacts = state => state.contacts.items;

// Функция selectFilter принимает объект состояния (state) и возвращает значение свойства filter из объекта состояния.
export const selectFilter = state => state.filter;

// Функция selectVisibleContacts использует функцию createSelector для создания селектора, который зависит от двух других селекторов: selectContacts и selectFilter.
// Селектор selectVisibleContacts возвращает отфильтрованный массив контактов, где имя контакта (contact.name) содержит строку фильтра (filter).
export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
