import { NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import imageHomePage from 'images/21.png';
import authSelectors from 'redux/auth/auth-selectors';

const useStyles = createUseStyles({
  list: {
    display: 'flex',
    alignItems: 'center',

    minHeight: 64,
    padding: {
      right: 24,
      left: 24,
    },
    color: '#fff',
    // backgroundColor: 'rgb(125, 19, 196, 0.7)',
    // boxShadow: [
    //   [0, 2, 4, -1, 'rgba(0, 0, 0, 0.2)'],
    //   [0, 4, 5, 0, 'rgba(0, 0, 0, 0.14)'],
    //   [0, 1, 10, 0, 'rgba(0, 0, 0, 0.12)'], // box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    // ],
    '& a': {
      marginRight: 20,
      // width: '100%',
    },
  },
  link: {
    fontSize: 22,
    fontWeight: 500,
    color: '#2a2a2a',
    padding: {
      top: 12,
      bottom: 12,
    },
    transition: 'all 300ms ease-in-out',
    '&:hover,&:focus': {
      color: '#279ae7',
      transform: 'scale(1.05)',
    },
  },
  activeLink: {
    color: '#279ae7',
  },
  logo: {
    // backgroundColor: '#fff',
    borderRadius: '50%',
  },
});

const Navigation = () => {
  const classes = useStyles();
  const IsAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav className={classes.list}>
      <NavLink
        exact
        to="/"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        <img
          className={classes.logo}
          src={imageHomePage}
          alt="phonebook poster"
          width="50"
          height="50"
        />
      </NavLink>

      <NavLink
        exact
        to="/"
        className={classes.link}
        activeClassName={classes.activeLink}
      >
        Home
      </NavLink>

      {IsAuthenticated && (
        <NavLink
          to="/contacts"
          className={classes.link}
          activeClassName={classes.activeLink}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
