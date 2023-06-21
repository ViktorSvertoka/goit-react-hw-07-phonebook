export const getContacts = state => state.contacts.items; // Возвращает список контактов из состояния

export const getFilter = state => state.filter; // Возвращает текущий фильтр из состояния

export const getVisibleContacts = state => {
  const contacts = getContacts(state); // Получает список контактов
  const filter = getFilter(state); // Получает текущий фильтр
  const normalizedFilter = filter.toLowerCase(); // Преобразует фильтр в нижний регистр

  // Фильтрует контакты, чтобы возвращать только те, чьи имена содержат подстроку фильтра (в нижнем регистре)
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
