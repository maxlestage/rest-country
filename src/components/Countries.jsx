import ShortCountry from "./ShortCountry";
import ShowCountry from "./ShowCountry";

function Countries({ allCountry }) {
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
            <ShortCountry
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
