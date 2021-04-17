import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { useSelector, useDispatch } from 'react-redux';
import { filterContacts } from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import style from './Filter.module.scss';

const Filter = ({ text }) => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleInputFindChange = ({ target }) => {
    const { value } = target;
    dispatch(filterContacts(value));
  };

  return (
    <>
      <p className={style.title}>{text}</p>
      <input
        className={style.input}
        type="text"
        name="filter"
        value={filter}
        onChange={handleInputFindChange}
      />
    </>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Filter;
