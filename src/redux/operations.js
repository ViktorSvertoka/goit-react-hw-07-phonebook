// Импорт функции createAsyncThunk из библиотеки '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit';
// Импорт axios для выполнения HTTP-запросов
import axios from 'axios';

// Установка базового URL для axios
axios.defaults.baseURL = 'https://649496f90da866a9536803ee.mockapi.io';

// Создание асинхронного Thunk-действия fetchContacts
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll', // Уникальная строка, идентифицирующая это действие
  async (_, thunkAPI) => {
    try {
      // Отправка GET-запроса на '/contacts'
      const response = await axios.get('/contacts');
      // Возврат полученных данных
      return response.data;
    } catch (error) {
      // В случае ошибки, отклонение действия с указанием ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Создание асинхронного Thunk-действия addContacts
export const addContacts = createAsyncThunk(
  'contacts/addContacts', // Уникальная строка, идентифицирующая это действие
  async ({ name, number }, thunkAPI) => {
    try {
      // Отправка POST-запроса на '/contacts' с данными { name, number }
      const response = await axios.post('/contacts', { name, number });
      // Возврат полученных данных
      return response.data;
    } catch (error) {
      // В случае ошибки, отклонение действия с указанием ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Создание асинхронного Thunk-действия deleteContacts
export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts', // Уникальная строка, идентифицирующая это действие
  async (contactId, thunkAPI) => {
    try {
      // Отправка DELETE-запроса на `/contacts/${contactId}`
      const response = await axios.delete(`/contacts/${contactId}`);
      // Возврат полученных данных
      return response.data;
    } catch (error) {
      // В случае ошибки, отклонение действия с указанием ошибки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
