function Countries({ allCountry }) {
  return (
    <>
      {allCountry.length > 0 ? (
        <ul>
          {allCountry.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      ) : (
        <p>Nothing</p>
      )}
    </>
  );
}

export default Countries;
