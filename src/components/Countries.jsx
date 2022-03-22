import { useState } from "react";
import ShowCountry from "./ShowCountry";

function Countries({ allCountry }) {
  const [clicked, setClicked] = useState(false);
  function handleMoreClick() {
    setClicked(!clicked);
  }

  if (allCountry.length === 0) {
    return <p>Nothing</p>;
  } else if (allCountry.length === 1) {
    const country = allCountry[0];
    return (
      <ShowCountry
        key={country.name.common}
        title={country.name.common}
        capital={country.capital}
        area={country.area}
        languages={country.languages}
        flag={country.flags.png}
        alt={country.name.common}
      />
    );
  } else if (allCountry.length > 1 && allCountry.length < 10) {
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
                  clicked={clicked}
                />
              )}
            </div>
          );
        })}
      </>
    );
  } else {
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
