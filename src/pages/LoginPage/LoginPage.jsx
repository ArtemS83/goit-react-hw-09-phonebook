import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Section from 'components/Section';
import Button from 'components/Button';
import style from './LoginPage.module.scss';
import authOperations from '../../redux/auth/auth-operations';

const LoginPage = () => {
  //{name:'Artem',email:'aqu@ukr.net', passworld : '1111111'}
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (!email || !password) {
      alert('Please enter email and password');
    }
    const user = {
      email,
      password,
    };

    dispatch(authOperations.logIn(user));

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <Section title="">
        <h1 className={style.title}>Login</h1>
        <form onSubmit={handleSubmit} className={style.form} autoComplete="off">
          <label className={style.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter email"
              onChange={handleChangeEmail}
            />
          </label>

          <label className={style.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter password"
              minLength="7"
              onChange={handleChangePassword}
            />
          </label>
          <Button title="Login" type="submit" />
        </form>
      </Section>
    </>
  );
};

export default LoginPage;
