import { useState } from "react";
import ShowCountry from "./ShowCountry";

function Countries({ allCountry }) {
  const [clicked, setClicked] = useState(false);
  function handleMoreClick() {
    setClicked(!clicked);
  }

  return (
    <>
      {allCountry.length > 0 ? (
        <ul>
          {allCountry.map((n) => {
            if (allCountry) {
              if (allCountry.length === 1) {
                return (
                  <>
                    <ShowCountry
                      key={n.name.common}
                      title={n.name.common}
                      capital={n.capital}
                      area={n.area}
                      languages={n.languages}
                      flag={n.flags.png}
                      alt={n.name.common}
                    />
                  </>
                );
              } else if (allCountry.length > 1 && allCountry.length < 10) {
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
              } else {
                return <div key={n.name.common}>{n.name.common}</div>;
              }
            }
          })}
        </ul>
      ) : (
        <p>Nothing</p>
      )}
    </>
  );
}

export default Countries;
