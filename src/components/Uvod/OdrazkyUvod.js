import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';
import { faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { faCloudSun } from '@fortawesome/free-solid-svg-icons';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faCampground } from '@fortawesome/free-solid-svg-icons';
import { faTree } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';

function OdrazkyUvod() {
  return (
    <div className='odrazkyUvodContainer'>
      <ul className='odrazkySloupecA'>
        <li>
          <FontAwesomeIcon icon={faBug} size='1x' fixedWidth /> {'  '}dětství v
          přírodě
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} size='1x' fixedWidth />
          {'  '}
          individuální přístup k dětem i dospělým
        </li>
        <li>
          <FontAwesomeIcon icon={faComments} size='1x' fixedWidth />
          {'  '} učení prožitkem
        </li>
        <li>
          <FontAwesomeIcon icon={faSeedling} size='1x' fixedWidth />
          {'  '} přirozený rozvoj
        </li>
        <li>
          <FontAwesomeIcon icon={faHammer} size='1x' fixedWidth />
          {'  '} fyzická odolnost
        </li>
      </ul>
      <ul className='odrazkySloupecB'>
        <li>
          <FontAwesomeIcon icon={faTree} size='1x' fixedWidth />
          {'  '} bez zdí a plotů
        </li>
        <li>
          <FontAwesomeIcon icon={faPaintBrush} size='1x' fixedWidth />
          {'  '} nabízíme plnohodnotné vzdělávání
        </li>
        <li>
          <FontAwesomeIcon icon={faCampground} size='1x' fixedWidth />
          {'  '} kapacita 15 dětí
        </li>
        <li>
          <FontAwesomeIcon icon={faMapMarkedAlt} size='1x' fixedWidth />
          {'  '} školka je zapsaná v rejstříku MŠMT
        </li>
        <li>
          <FontAwesomeIcon icon={faCloudSun} size='1x' fixedWidth />
          {'  '} otevřeno 7:30 až 16:00
        </li>
      </ul>
    </div>
  );
}

export default OdrazkyUvod;
