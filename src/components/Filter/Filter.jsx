import { Div, Label, Input } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors'; // Импорт селектора selectFilter из файла 'redux/selectors'
import { changeFilter } from 'redux/filterSlice'; // Импорт действия changeFilter из файла 'redux/filterSlice'

// Компонент фильтрации контактов
const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  // Обработчик изменения значения фильтра
  const onChange = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <Div>
      <Label>
        Find contacts by name
        <Input type="text" value={value} onChange={onChange} />
      </Label>
    </Div>
  );
};

export default Filter;
