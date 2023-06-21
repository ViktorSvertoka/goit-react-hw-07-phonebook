import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { Form, Label, Button, Input } from './ContactForm.styled';
import { ReactComponent as AddIcon } from '../icons/add.svg';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';

// Генерация уникальных идентификаторов для полей формы.
const nameInputId = nanoid();
const numberInputId = nanoid();

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  // Обработка отправки формы.
  const handleSubmit = event => {
    event.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    // Проверяет, существует ли контакт с таким же именем в списке контактов. Если контакт уже существует, выводится предупреждение.
    if (isInContacts) {
      alert(`${name} is already in contacts`);
      return;
    }

    // Вызов функции onSubmit из родительского компонента с передачей объекта контакта.
    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  // Обработка изменения значений полей формы.
  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor={nameInputId}>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>

      <Label htmlFor={numberInputId}>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">
        <AddIcon fill="#f08080" width="25" height="25" />
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
