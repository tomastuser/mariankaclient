import React, { useState } from 'react';

const Andel = () => {
  const [kridlaAct, setKridla] = useState(true);
  return (
    <div className='andelCont'>
      <div className='andel'>
        <div
          onClick={() => setKridla((kridlaAct) => !kridlaAct)}
          className='andelObrazek'
        >
          <img
            className='hlava'
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587161196/ANDEL_hlava_tu8aho.png'
          ></img>
          <div className='dotkni'>klikni!</div>
          <img
            className={kridlaAct ? 'kridlaActive kridla' : 'kridla'}
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587158349/ANDEL_kridla1_d8nlm6.png'
          ></img>
          <img
            className='trup'
            src='https://res.cloudinary.com/tomastuser/image/upload/v1587155615/ANDEL_kridla1_j05xh3.png'
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Andel;
