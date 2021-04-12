import PropTypes from 'prop-types';
import style from './Button.module.scss';

const Button = ({ title, type, onClick }) => {
  return (
    <button
      className={type === 'button' ? style.buttonButton : style.button}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  title: 'button',
  type: 'button',
  onDelete: () => {},
};

Button.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  onDelete: PropTypes.func,
};

export default Button;
