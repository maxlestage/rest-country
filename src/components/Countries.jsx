function Countries({ allCountry }) {
  console.log(allCountry);
  return (
    <>
      {allCountry.length > 0 ? (
        <ul>
          {allCountry.map((n) => {
            if (allCountry) {
              if (allCountry.length === 1) {
                return (
                  <div key={n.name.common}>
                    <h1>{n.name.common}</h1>
                    <p>Capital: {n.capital}</p>
                    <p>Area: {n.area} </p>
                    <h2>Languages:</h2>
                    {Object.values(n.languages).map((lang) => (
                      <div key={lang}>
                        <li>{lang}</li>
                      </div>
                    ))}
                    <br />
                    <img src={n.flags.png} alt={n.name.common} />
                  </div>
                );
              } else if (allCountry.length > 1 && allCountry.length < 10) {
                return (
                  <div key={n.name.common}>
                    {n.name.common}{" "}
                    <button onClick={() => console.log("test")}>Show</button>
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
