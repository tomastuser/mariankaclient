import React from "react";
import { Link } from "react-router-dom";

const AktualitaZastupce = ({ aktualita }) => {
  return (
    <div className="aktualitaZastupce">
      <Link
        className="aktualitaZastupceNadpis"
        to={`/aktuality/${aktualita.id}`}
      >
        <h4>{aktualita.Nadpis}</h4>
      </Link>
      <div className="aktualitaZastupceText">
        <Link to={`/aktuality/${aktualita.id}`}>
          <img src={aktualita.Image.url} alt={aktualita.Nadpis} />
        </Link>
        <div
          dangerouslySetInnerHTML={{
            __html:
              aktualita.Text.substr(0, 400) +
              (aktualita.Text.length > 400 ? " ..." : ""),
          }}
        ></div>
      </div>

      <Link className="button" to={`/aktuality/${aktualita.id}`}>
        Celý příspěvek
      </Link>
    </div>
  );
};

export default AktualitaZastupce;