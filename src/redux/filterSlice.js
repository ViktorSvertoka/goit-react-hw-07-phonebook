// Импорт функции createSlice из библиотеки '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit';

// Создание slice для фильтра
export const filterSlice = createSlice({
  name: 'filter', // Уникальное имя для slice
  initialState: '', // Начальное состояние фильтра
  reducers: {
    // Определение редуктора changeFilter, который будет изменять состояние фильтра на основе переданного действия action
    changeFilter(state, action) {
      return (state = action.payload);
    },
  },
});

// Экспорт действия action changeFilter из slice filterSlice
export const { changeFilter } = filterSlice.actions;

// Экспорт редуктора reducer filterReducer из slice filterSlice
export const filterReducer = filterSlice.reducer;
