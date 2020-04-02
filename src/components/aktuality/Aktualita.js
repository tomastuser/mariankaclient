import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Aktualita = (props) => {
  const [aktualita, setAktualita] = useState({});
  const [img, setImg] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(`/news/${props.match.params.id}`)
      .then((res) => {
        setAktualita(res.data);
        setImg(res.data.Image);
        setIsLoaded(true);
      })
      .catch((err) => console.log(err));
  }, []);

  if (isLoaded) {
    return (
      <div className="aktualita">
        <h2 className="aktualitaNadpis">{aktualita.Nadpis}</h2>
        <Link to={`/images/${aktualita.id}`}>
          <img src={img.url} alt={aktualita.Nadpis} />
        </Link>
        <div>
          <div dangerouslySetInnerHTML={{ __html: aktualita.Text }}></div>
          <br />
          <br />
          <div className="button" onClick={props.history.goBack}>
            Zpět
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="loading">
      <h3>NAHRÁVÁM...</h3>
    </div>
  );
};

export default Aktualita;
