import React from 'react';
import Historie from './components/ONas/Historie';
import Program from './components/ONas/Program';
import Koncepce from './components/ONas/Koncepce';

function ONas() {
  return (
    <div className='ONas'>
      <div className='ONasText'>
        <h1>O nás</h1>
        <br />
        <Historie />
        <Program />
        <Koncepce />
      </div>
    </div>
  );
}

export default ONas;
