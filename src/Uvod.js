import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AktualityPrehled from './components/aktuality/AktualityPrehled';
import OdrazkyUvod from './components/OdrazkyUvod';
import UvodStred from './components/UvodStred';

function Uvod() {
  const [kridlaAct, setKridla] = useState(false);
  return (
    <div className='Uvod'>
      <div className='pozadiFixed'>
        <img src='https://res.cloudinary.com/tomastuser/image/upload/v1586968070/IMG_6591_k3vx8h.jpg'></img>
      </div>
      <div className='uvodAktuality'>
        <h1>Úvod</h1>
        <br />
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
        <UvodStred />
        <OdrazkyUvod />
        <h1>Nejnovější aktuality</h1>
        <AktualityPrehled />
        <Link className='button' to='/aktualityvse'>
          Všechny příspěvky
        </Link>
      </div>
      <div className='pozadiPrazdneContainer'>
        <div className='pozadiPrazdne'>
          <h1>
            <i>Víte, že...</i>
          </h1>
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
          Zázemí školky tvoří zahrada s chatkou a týpím kousek od lesa. Nabízíme
          plnohodnotné předškolní vzdělávání pro skupinu 15 dětí. Program
          probíhá převážně v přírodě za přítomnosti dvou pedagogů. Vycházíme z
          přírodní pedagogiky a konceptu Respektovat a být respektován, s prvky
          Waldorfské pedagogiky a dalších alternativních pedagogických směrů.
          Otevřeno je každý den od 7:30 do 16:00.
        </div>
      </div>
    </div>
  );
}

export default Uvod;
