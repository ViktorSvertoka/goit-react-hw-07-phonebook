import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/selectors'; // Импорт селектора selectVisibleContacts из файла 'redux/selectors'
import { deleteContacts } from '../../redux/operations'; // Импорт асинхронного Thunk-действия deleteContacts из файла '../../redux/operations'

// Компонент списка контактов
const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка удаления контакта
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              <DeleteIcon fill="#000000" width="20" height="20" />
              delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
