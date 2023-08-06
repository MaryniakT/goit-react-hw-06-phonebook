import { useSelector } from 'react-redux';
import { Contact } from '../Contact/Contact';
import { getContacts } from 'redux/selectors';

export const ContactList = () => {
  const  visibleContacts  = useSelector( getContacts );

  return (
    <ul>
      {visibleContacts.map(item => (
        <li key={item.id}>
          <Contact item={item} />
        </li>
      ))}
    </ul>
  );
};