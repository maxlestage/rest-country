import { useState } from "react";
import ShowCountry from "./ShowCountry";

function Countries({ allCountry }) {
  const [clicked, setClicked] = useState(false);
  function handleMoreClick() {
    setClicked(!clicked);
  }

  if (allCountry.length === 1) {
    return (
      <>
        {allCountry.map((n) => {
          return (
            <ShowCountry
              key={n.name.common}
              title={n.name.common}
              capital={n.capital}
              area={n.area}
              languages={n.languages}
              flag={n.flags.png}
              alt={n.name.common}
            />
          );
        })}
      </>
    );
  }

  if (allCountry.length > 1 && allCountry.length < 10) {
    return (
      <>
        {allCountry.map((n) => {
          return (
            <div key={n.name.common}>
              {n.name.common}{" "}
              <button onClick={handleMoreClick}>
                {clicked ? "Hide" : "Show"}
              </button>
              {clicked && (
                <ShowCountry
                  key={n.name.common}
                  title={n.name.common}
                  capital={n.capital}
                  area={n.area}
                  languages={n.languages}
                  flag={n.flags.png}
                  alt={n.name.common}
                />
              )}
            </div>
          );
        })}
      </>
    );
  }

  if (allCountry) {
    return (
      <>
        {allCountry.map((n) => {
          return <div key={n.name.common}>{n.name.common}</div>;
        })}
      </>
    );
  }
}

export default Countries;
