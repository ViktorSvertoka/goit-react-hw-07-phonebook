import { createSlice } from '@reduxjs/toolkit';

// Исходное состояние фильтра
const initialFilterState = '';

// Создание slice фильтра с использованием createSlice
const filterSlice = createSlice({
  name: 'filter', // Имя slice фильтра
  initialState: initialFilterState, // Начальное состояние фильтра
  reducers: {
    changeFilter(_, action) {
      return action.payload; // Обновление значения фильтра на основе переданного действия
    },
  },
});

// Экспорт действия changeFilter из slice фильтра
export const { changeFilter } = filterSlice.actions;

// Экспорт редьюсера фильтра из slice фильтра
export const filterReducer = filterSlice.reducer;
