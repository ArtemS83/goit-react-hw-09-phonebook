import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operations';
import Button from 'components/Button';
import Modal from 'components/Modal';
import { MdPhoneAndroid } from 'react-icons/md';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: 500,
  },
  name: {
    marginRight: 8,
    marginLeft: 6,
  },
  number: {
    color: 'rgb(79, 119, 238)',
  },
  divButton: {
    marginLeft: 'auto',
    '& button': {
      marginRight: 5,
      marginBottom: 5,
    },
  },
});

const ContactItem = ({ name, number, id }) => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  const hendelCloseModal = () => {
    setShowModal(false);
  };

  const dispatch = useDispatch();

  const hendelDeleteContact = () => dispatch(deleteContact(id));

  const hendelOpenModalUpdateContact = () => setShowModal(true);

  return (
    <>
      <li className={classes.item}>
        <MdPhoneAndroid />
        <span className={classes.name}>{name}:</span>
        <span className={classes.number}>{number}</span>
        <div className={classes.divButton}>
          <Button title="Update" onClick={hendelOpenModalUpdateContact} />
          <Button title="Delete" onClick={hendelDeleteContact} />
        </div>
      </li>
      {showModal && (
        <Modal
          id={id}
          nameForUpdate={name}
          numberForUpdate={number}
          onCloseModal={hendelCloseModal}
        />
      )}
    </>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
