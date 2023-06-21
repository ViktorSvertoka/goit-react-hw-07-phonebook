import React from 'react';
import { List, Item, Button } from './ContactList.styled';
import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { removeContact } from 'redux/contactsSlice';

// Компонент списка контактов
const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            // Кнопка удаления контакта
            <Button type="button" name="delete" onClick={handleDelete}>
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
