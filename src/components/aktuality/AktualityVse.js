import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AktualitaZastupce from "./AktualitaZastupce";

const Aktuality = () => {
  const [aktuality, setAktuality] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get("/news")
      .then((res) => {
        setAktuality(res.data);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  const serazeniOdNejvyssiho = () => {
    return [].slice.call(aktuality).sort(function (a, b) {
      return a - b;
    });
  };

  if (isLoaded) {
    return (
      <div className="aktualityContainer">
        <div className="aktuality">
          {serazeniOdNejvyssiho().map((aktualita) => (
            <AktualitaZastupce key={aktualita.id} aktualita={aktualita} />
          ))}
        </div>
        <Link className="button" to="/">
          Zpět
        </Link>
      </div>
    );
  }
  return (
    <div className="loading">
      <h3>NAHRÁVÁM...</h3>
    </div>
  );
};

export default Aktuality;
