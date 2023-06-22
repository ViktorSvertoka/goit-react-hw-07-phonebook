// Импорт необходимых зависимостей из библиотеки 'react-redux' и других модулей
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors'; // Импорт селектора selectContacts из файла 'redux/selectors'
import { fetchContacts } from '../../redux/operations'; // Импорт асинхронного Thunk-действия fetchContacts из файла '../../redux/operations'

// Импорт стилей и компонентов
import { Container, Title, SubTitle, Wrapper } from './App.styled';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';

const App = () => {
  // Использование селектора selectContacts для получения списка контактов из Redux-хранилища
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    // Запуск асинхронного Thunk-действия fetchContacts при монтировании компонента
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        // Если есть контакты, показывается компонент фильтрации
        <Filter />
      ) : (
        // Если нет контактов, выводится сообщение об отсутствии контактов
        <Wrapper>Your phonebook is empty. Add first contact!</Wrapper>
      )}
      {contacts.length > 0 && (
        // Если есть контакты, показывается компонент списка контактов
        <ContactList />
      )}
    </Container>
  );
};

export default App;
