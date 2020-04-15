import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Footer from './components/Footer';
import ONas from './ONas';
import NasTym from './NasTym';
import Kontakt from './Kontakt';
import ProRodice from './ProRodice';
import Dokumenty from './Dokumenty';
import Uvod from './Uvod';
import './App.css';
import Aktualita from './components/aktuality/Aktualita';
import AktualityVse from './components/aktuality/AktualityVse';
import Foto from './components/aktuality/Foto';

const App = () => {
  const navLinks = [
    {
      name: 'O nás',
      path: '/onas',
    },
    {
      name: 'Pro rodiče',
      path: '/prorodice',
    },
    {
      name: 'Náš Tým',
      path: '/nastym',
    },
    {
      name: 'Dokumenty',
      path: '/dokumenty',
    },
    {
      name: 'Kontakt',
      path: '/kontakt',
    },
  ];
  return (
    <Router>
      <div className='App'>
        <Nav navLinks={navLinks} />
        <div className='navSpacerAtTheTop'></div>
        <Switch>
          <Route path='/' exact component={Uvod} />
          <Route path='/onas' exact component={ONas} />
          <Route path='/prorodice' exact component={ProRodice} />
          <Route path='/nastym' exact component={NasTym} />
          <Route path='/dokumenty' exact component={Dokumenty} />
          <Route path='/kontakt' exact component={Kontakt} />
          <Route path='/aktualityvse' exact component={AktualityVse} />
          <Route exact path='/aktuality/:id' component={Aktualita} />
          <Route exact path='/images/:id' component={Foto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
