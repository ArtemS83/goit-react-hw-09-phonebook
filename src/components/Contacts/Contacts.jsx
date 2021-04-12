import { getVisibleContacts } from '../../redux/contacts/contacts-selectors';
import { useSelector } from 'react-redux';
import ContactItem from '../ContactItem';
// import style from './Contacts.module.scss';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  list: {
    paddingLeft: 30,
  },
});

const Contacts = () => {
  const classes = useStyles();
  const visibleContacts = useSelector(getVisibleContacts);

  return (
    <ul className={classes.list}>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default Contacts;
