import React from 'react';
import { Link } from 'react-router-dom';
import AktualityPrehled from './Aktualitky/AktualityPrehled';
import OdrazkyUvod from './Uvod/OdrazkyUvod';
import UvodSlider from './Uvod/UvodSlider';
import Andel from './Uvod/Andel';

function Uvod() {
  return (
    <div className='Uvod'>
      <div className='pozadiFixed'>
        <img src='https://res.cloudinary.com/tomastuser/image/upload/v1587637533/aezswjs5y9sb8bds5hyhHD_do5byd.jpg'></img>
      </div>
      <div className='uvodAktuality'>
        <UvodSlider />
        <div className='UvodTextCont'>
          <div className='UvodTextLogo'>
            <img src='https://res.cloudinary.com/tomastuser/image/upload/v1587164936/marianka-logo_jo1a9u.png'></img>
          </div>
          <div className='UvodText'>
            <h1>Lesní mateřská škola Mariánka</h1>
            <h3>
              Patříme k nejdéle fungujícím lesním školkám v České republice.
              Naše školka je zapsaná v rejstříku škol a školských zařízení při
              MŠMT, své děti proto nemusíte přehlašovat na poslední rok jinam.
              Splňujeme Standardy kvality pro lesní školky a jsme součástí
              Asociace lesních mateřských škol.
            </h3>
          </div>
        </div>
        <Andel />

        <h1>Nejnovější aktuality</h1>
        <AktualityPrehled />
        <Link className='button' to='/aktuality'>
          Všechny příspěvky
        </Link>
      </div>
      <div className='pozadiPrazdneContainer'>
        <div className='pozadiPrazdne'>
          <OdrazkyUvod />
        </div>
      </div>
    </div>
  );
}

export default Uvod;
