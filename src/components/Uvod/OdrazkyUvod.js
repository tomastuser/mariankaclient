import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBug,
  faMapSigns,
  faCloudSun,
  faMapMarkedAlt,
  faComments,
  faCampground,
  faTree,
  faHome,
  faSeedling,
  faFrog,
} from '@fortawesome/free-solid-svg-icons';

function OdrazkyUvod() {
  return (
    <div className='odrazkyUvodContainer'>
      <h1>Lesní školka Mariánka - to je:</h1>
      <ul className='odrazkySloupecA'>
        <li>
          <FontAwesomeIcon icon={faBug} size='1x' fixedWidth /> {'  '}dětství v
          přírodě
        </li>
        <li>
          <FontAwesomeIcon icon={faSeedling} size='1x' fixedWidth />
          {'  '} učení prožitkem
        </li>
        <li>
          <FontAwesomeIcon icon={faFrog} size='1x' fixedWidth />
          {'  '} bez zdí a plotů
        </li>
        <li>
          <FontAwesomeIcon icon={faCampground} size='1x' fixedWidth />
          {'  '} kapacita 15 dětí
        </li>
        <li>
          <FontAwesomeIcon icon={faCloudSun} size='1x' fixedWidth />
          {'  '} otevřeno 7:30 až 16:00
        </li>
      </ul>
      <ul className='odrazkySloupecB'>
        <li>
          <FontAwesomeIcon icon={faTree} size='1x' fixedWidth />
          {'  '} dlouholetá tradice
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} size='1x' fixedWidth />
          {'  '} kvalifikovaní pedagogové
        </li>
        <li>
          <FontAwesomeIcon icon={faHome} size='1x' fixedWidth />
          {'  '} plnohodnotné vzdělávání, včetně předškoláků
        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' fixedWidth />
          {'  '} zápis v rejstříku MŠMT
        </li>
        <li>
          <FontAwesomeIcon icon={faMapSigns} size='1x' fixedWidth />
          {'  '} člen Asociace lesních mateřských škol
        </li>
      </ul>
    </div>
  );
}

export default OdrazkyUvod;
