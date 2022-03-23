import { useState } from "react";
import ShowCountry from "./ShowCountry";

function ShortCountry({ title, capital, area, languages, flag, alt }) {
  const [clicked, setClicked] = useState(false);
  function handleMoreClick() {
    setClicked(!clicked);
  }

  return (
    <div key={title}>
      {title}{" "}
      <button onClick={handleMoreClick}>{clicked ? "Hide" : "Show"}</button>
      {clicked && (
        <ShowCountry
          title={title}
          capital={capital}
          area={area}
          languages={languages}
          flag={flag}
          alt={alt}
          clicked={clicked}
        />
      )}
    </div>
  );
}

export default ShortCountry;
