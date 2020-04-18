import React from 'react';

function Kontakt() {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Kontakt</h1>
        <h3>Kde nás najdete:</h3> <p>Na konci ulice Samoty, Brno-Líšeň</p>
        <h3>e-mail:</h3> <p> info@lesnimarianka.cz</p>
        <h3>pro rodiče:</h3> <p> Mgr. Klára Taufarová tel: 604 536 796</p>
        <h3>ředitelka:</h3> <p> Mgr. Klára Krchňavá tel.: 777 145 343</p>
        <h3>Lesní mateřská škola Mariánka</h3>
        <ul>
          <li>školská právnická osoba</li>
          <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
          <li>IČ: 06 107 591</li>
          <li>ID datové schránky: 6h4qvbm</li>
          <li>č. účtu: 77996002/5500 (Raiffeisen bank)</li>
        </ul>
        <h3>Zřizovatel:</h3>
        <ul>
          <li>Kavyl z.s.</li>
          <li>Sídlo: č. p. 137, 664 06 Viničné Šumice</li>
          <li>IČ: 229 09 320</li>
          <li>
            <a href='www.lesnikavyl.cz'>www.lesnikavyl.cz</a>
          </li>
        </ul>
        <br />
        <div className='mapouter'>
          <div className='gmap_canvas'>
            <iframe
              id='gmap_canvas'
              src='https://maps.google.com/maps?q=49.2155000N%2C%2016.6988333E&t=k&z=17&ie=UTF8&iwloc=&output=embed'
              scrolling='no'
              marginHeight={0}
              marginWidth={0}
              width={600}
              height={500}
              frameBorder={0}
            />
            <a href='https://www.embedgooglemap.net' />
            "&gt;www.google.com/map
          </div>
          <style
            dangerouslySetInnerHTML={{
              __html:
                '.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}',
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Kontakt;
