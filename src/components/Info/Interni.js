import React from 'react';

const Interni = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Interní sekce</h1>
        <form>
          <div className='loginCont'>
            <input type='text' placeholder='Jméno' />
            <input type='password' placeholder='Heslo' />
            <a className='button'>Přihlásit se</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Interni;
