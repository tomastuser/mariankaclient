import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Aktualne from "./Aktualne";
import NasTym from "./NasTym";
import Kontakt from "./Kontakt";
import Zapis from "./Zapis";
import Rodice from "./Rodice";
import Uvod from "./Uvod";
import "./App.css";
import Aktualita from "./components/aktuality/Aktualita";
import AktualityVse from "./components/aktuality/AktualityVse";
import Foto from "./components/aktuality/Foto";

const App = () => {
  const navLinks = [
    {
      name: "Aktuálně",
      path: "/aktualne",
    },
    {
      name: "Zápis",
      path: "/zapis",
    },
    {
      name: "Rodiče",
      path: "/rodice",
    },
    {
      name: "Náš Tým",
      path: "/nastym",
    },
    {
      name: "Kontakt",
      path: "/kontakt",
    },
  ];
  return (
    <Router>
      <div className="App">
        <Nav navLinks={navLinks} />
        <div className="navSpacerAtTheTop"></div>
        <Switch>
          <Route path="/" exact component={Uvod} />
          <Route path="/aktualne" exact component={Aktualne} />
          <Route path="/zapis" exact component={Zapis} />
          <Route path="/rodice" exact component={Rodice} />
          <Route path="/nastym" exact component={NasTym} />
          <Route path="/kontakt" exact component={Kontakt} />
          <Route path="/aktualityvse" exact component={AktualityVse} />
          <Route exact path="/aktuality/:id" component={Aktualita} />
          <Route exact path="/images/:id" component={Foto} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
