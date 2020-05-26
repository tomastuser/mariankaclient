import React from 'react';
import Auth from '../otherComponents/Auth';

const Interni = (props) => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Interní sekce</h1>
        <div>
          <h3 href='#'>Rozpis úklidů</h3>
          <h3 href='#'>Slavnosti</h3>
        </div>
        <button
          className='button'
          onClick={() => {
            Auth.logout(() => {
              props.history.push('/info/internilogin');
            });
          }}
        >
          Odhlášení
        </button>
      </div>
    </div>
  );
};

export default Interni;
