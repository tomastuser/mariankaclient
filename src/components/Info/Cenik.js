import React from 'react';

const Cenik = () => {
  return (
    <div className='mainTextCont'>
      <div className='mainText'>
        <h1>Ceník</h1>
        <p>
          Za dítě umístěné v naší lesní mateřské škole lze za kalendářní rok
          2019 uplatnit odpočet na dani až 13 350 Kč za každé dítě, za
          kalendářní rok 2020 pak až 14 600 Kč. Tento odpočet je vyřizován
          individuálně v rámci daňového přiznání.
        </p>
        <table>
          <tr>
            <th>Model docházky</th>
            <th>Cena za měsíc (v Kč)</th>
            <th>Orientační cena za den (v Kč)</th>
          </tr>
          <tr>
            <td>Čtyřdenní a pětidenní</td>
            <td>5 500</td>
            <td>275</td>
          </tr>
          <tr>
            <td>Třídenní</td>
            <td>4 300</td>
            <td>360</td>
          </tr>
          <tr>
            <td>Dvoudenní</td>
            <td>3 200</td>
            <td>400</td>
          </tr>
        </table>
        <p>V ceně není zahrnuto stravné.</p>
        <h1>Stravování</h1>
        <p>
          Obědy pro děti dovážíme ze Školní jídelny Novolíšeňská. Cena dotované
          dětské porce je 56 Kč včetně dovozu a není zahrnuta ve školkovném.
          Každý rodič má přístup do docházkového systému školky a oběd lze
          odhlásit do 13:00 předchozího dne. Svačinky odebíráme ze Školní
          jídelny Novolíšeňská.
        </p>
      </div>
    </div>
  );
};

export default Cenik;
