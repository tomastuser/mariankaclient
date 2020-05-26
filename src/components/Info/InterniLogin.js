import React, { useState } from 'react';
import Auth from '../otherComponents/Auth';

const InterniLogin = (props) => {
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const handleTextChange = (e) => setText(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleLogin = (e) => {
    e.preventDefault();
    if ((text === 'mariánka' || text === 'Mariánka') && password === 'rodič') {
      console.log('uspech');
      Auth.login(() => {
        props.history.push('/info/interni');
      });
    } else console.log('neuspech');
  };

  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Interní sekce - přihlášení</h1>
        <form className='loginCont'>
          <input
            type='text'
            placeholder='Jméno'
            required
            value={text}
            onChange={handleTextChange}
          />
          <input
            type='password'
            placeholder='Heslo'
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <button className='button' onClick={handleLogin}>
            Přihlásit se
          </button>
        </form>
      </div>
    </div>
  );
};

export default InterniLogin;
