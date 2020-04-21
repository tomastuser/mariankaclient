import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AktualityPrehled from './Aktualitky/AktualityPrehled';
import OdrazkyUvod from './Uvod/OdrazkyUvod';
import UvodStred from './Uvod/UvodStred';

function Uvod() {
  const [kridlaAct, setKridla] = useState(true);
  return (
    <div className='Uvod'>
      <div className='pozadiFixed'>
        <img src='https://res.cloudinary.com/tomastuser/image/upload/v1586968070/IMG_6591_k3vx8h.jpg'></img>
      </div>
      <div className='uvodAktuality'>
        <UvodStred />
        <OdrazkyUvod />
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
        <h1>Nejnovější aktuality</h1>
        <AktualityPrehled />
        <br />
        <Link className='button' to='/aktuality'>
          Všechny příspěvky
        </Link>
      </div>
      <div className='pozadiPrazdneContainer'>
        <div className='pozadiPrazdne'>
          <h1>Víte, že...</h1>
          <ul>
            <li>
              patříme k nejdéle fungujícím lesním školkám v České republice?
            </li>
            <li>
              je školka zapsaná v rejstříku škol a školských zařízení při MŠMT?
            </li>
            <li>
              své děti proto nemusíte přehlašovat na poslední rok jinam a
              školkovné si můžete odečíst z daní
            </li>
            <li>
              splňujeme Standardy kvality pro lesní školky a jsme součástí
              Asociace lesních mateřských škol?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Uvod;
