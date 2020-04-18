import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
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
      path: '/omariance',
      subNavLinks: [
        {
          name: 'O Mariánce',
          path: '/omariance',
        },
        {
          name: 'Zázemí',
          path: '/zazemi',
        },
        {
          name: 'Náš tým',
          path: '/nastym',
        },
        {
          name: 'Program',
          path: '/program',
        },
        {
          name: 'Projekty',
          path: '/projekty',
        },
        {
          name: 'Podporují nás',
          path: '/sponzori',
        },
        {
          name: 'Dokumenty',
          path: '/dokumenty',
        },
      ],
    },
    {
      name: 'Praktické informace',
      path: '/zapis',
      subNavLinks: [
        {
          name: 'Zápis',
          path: '/zapis',
        },
        {
          name: 'Ceník a stravování',
          path: '/cenik',
        },
        {
          name: 'Co s sebou',
          path: '/cossebou',
        },
        {
          name: 'Naše pravidla',
          path: '/nasepravidla',
        },
        {
          name: 'Interni sekce',
          path: '/interni',
        },
      ],
    },
    {
      name: 'Aktuality',
      path: '/aktuality',
      subNavLinks: [],
    },
    {
      name: 'Další aktivity',
      path: '/krouzky',
      subNavLinks: [
        {
          name: 'Kroužky',
          path: '/krouzky',
        },
        {
          name: 'Tábory',
          path: '/tabory',
        },
        {
          name: 'Přednášky Kavylu',
          path: '/prednasky',
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
            <Route path='/omariance' exact component={OMariance} />
            <Route path='/zazemi' exact component={Zazemi} />
            <Route path='/nastym' exact component={NasTym} />
            <Route path='/program' exact component={Program} />
            <Route path='/projekty' exact component={Projekty} />
            <Route path='/sponzori' exact component={Sponzori} />
            <Route path='/dokumenty' exact component={Dokumenty} />

            <Route exact path='/zapis' component={Zapis} />
            <Route exact path='/cenik' component={Cenik} />
            <Route exact path='/cossebou' component={CoSSebou} />
            <Route exact path='/nasepravidla' component={NasePravidla} />
            <Route exact path='/interni' component={Interni} />

            <Route path='/aktuality' exact component={AktualityVse} />
            <Route exact path='/aktuality/:id' component={Aktualita} />

            <Route exact path='/krouzky' component={Krouzky} />
            <Route exact path='/tabory' component={Tabory} />
            <Route exact path='/prednasky' component={Prednasky} />

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
