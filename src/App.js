import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import './slick-theme.css';
import './slick.css';

import Uvod from './components/Uvod';
import Nav from './components/Nav';
import Footer from './components/Footer';

import OMariance from './components/ONas/OMariance';
import Zazemi from './components/ONas/Zazemi';
import NasTym from './components/ONas/NasTym';
import Program from './components/ONas/Program';
import Projekty from './components/ONas/Projekty';
import Sponzori from './components/ONas/Sponzori';
import Dokumenty from './components/ONas/Dokumenty';

import Zapis from './components/Info/Zapis';
import Cenik from './components/Info/Cenik';
import CoSSebou from './components/Info/CoSSebou';
import NasePravidla from './components/Info/NasePravidla';
import Interni from './components/Info/Interni';

import Aktualita from './components/Aktualitky/Aktualita';
import AktualityVse from './components/Aktualitky/AktualityVse';

import DalsiAktivity from './components/DalsiAktivity/DalsiAktivity';
import Krouzky from './components/DalsiAktivity/Krouzky';
import Tabory from './components/DalsiAktivity/Tabory';
import Prednasky from './components/DalsiAktivity/Prednasky';

import Kontakt from './components/Kontakt';

import Foto from './components/Aktualitky/Foto';
import ScrollToTop from './components/otherComponents/ScrollToTop';

const App = () => {
  const navLinks = [
    {
      name: 'O nás',
      path: '/onas',
      subNavLinks: [
        {
          name: 'O Mariánce',
          path: '/onas/omariance',
        },
        {
          name: 'Zázemí',
          path: '/onas/zazemi',
        },
        {
          name: 'Náš tým',
          path: '/onas/nastym',
        },
        {
          name: 'Program',
          path: '/onas/program',
        },
        {
          name: 'Projekty',
          path: '/onas/projekty',
        },
        {
          name: 'Podporují nás',
          path: '/onas/sponzori',
        },
        {
          name: 'Dokumenty',
          path: '/onas/dokumenty',
        },
      ],
    },
    {
      name: 'Praktické informace',
      path: '/info',
      subNavLinks: [
        {
          name: 'Zápis',
          path: '/info/zapis',
        },
        {
          name: 'Ceník a stravování',
          path: '/info/cenik',
        },
        {
          name: 'Co s sebou',
          path: '/info/cossebou',
        },
        {
          name: 'Naše pravidla',
          path: '/info/nasepravidla',
        },
        {
          name: 'Interni sekce',
          path: '/info/interni',
        },
      ],
    },
    {
      name: 'Aktuality',
      path: '/aktuality',
      subNavLinks: [],
    },
    {
      name: 'Aktivity Kavylu',
      path: '/kavyl',
      subNavLinks: [
        {
          name: 'Kroužky',
          path: '/kavyl/krouzky',
        },
        {
          name: 'Tábory',
          path: '/kavyl/tabory',
        },
        {
          name: 'Přednášky',
          path: '/kavyl/prednasky',
        },
      ],
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
      subNavLinks: [],
    },
  ];
  return (
    <Router>
      <div className='App'>
        <Nav navLinks={navLinks} />
        <div className='navSpacerAtTheTop'></div>
        <main>
          <ScrollToTop />
          <Switch>
            <Route path='/' exact component={Uvod} />
            <Route path='/onas' exact component={OMariance} />
            <Route path='/onas/omariance' exact component={OMariance} />
            <Route path='/onas/zazemi' exact component={Zazemi} />
            <Route path='/onas/nastym' exact component={NasTym} />
            <Route path='/onas/program' exact component={Program} />
            <Route path='/onas/projekty' exact component={Projekty} />
            <Route path='/onas/sponzori' exact component={Sponzori} />
            <Route path='/onas/dokumenty' exact component={Dokumenty} />

            <Route exact path='/info' component={Zapis} />
            <Route exact path='/info/zapis' component={Zapis} />
            <Route exact path='/info/cenik' component={Cenik} />
            <Route exact path='/info/cossebou' component={CoSSebou} />
            <Route exact path='/info/nasepravidla' component={NasePravidla} />
            <Route exact path='/info/interni' component={Interni} />

            <Route path='/aktuality' exact component={AktualityVse} />
            <Route exact path='/aktuality/:id' component={Aktualita} />
            <Route
              exact
              path='/aktuality/strana/:id'
              component={AktualityVse}
            />

            <Route exact path='/kavyl' component={DalsiAktivity} />
            <Route exact path='/kavyl/krouzky' component={Krouzky} />
            <Route exact path='/kavyl/tabory' component={Tabory} />
            <Route exact path='/kavyl/prednasky' component={Prednasky} />

            <Route path='/kontakt' exact component={Kontakt} />

            <Route exact path='/images/:id' component={Foto} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
