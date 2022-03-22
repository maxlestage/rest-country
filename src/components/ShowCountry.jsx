function ShowCountry({ title, capital, area, languages, flag, alt }) {
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
        <h2>Languages:</h2>
        {Object.values(languages).map((lang) => (
          <div key={lang}>
            <li>{lang}</li>
          </div>
        ))}
        <br />
        <img src={flag} alt={alt} />
        <br />
        <br />
      </div>
    </>
  );
}

export default ShowCountry;
