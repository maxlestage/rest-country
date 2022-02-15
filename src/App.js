import { useEffect } from "react";
import axios from "axios";
import Search from "./components/Search";
import { useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(
    () =>
      axios.get("https://restcountries.com/v3.1/all").then((response) => {
        const data = response.data;
        setCountries(data);
        console.log(data);
      }),
    []
  );

  const name = countries.map((c) => c.name.common);

  return (
    <>
      <Search name={name} />
    </>
  );
}

export default App;
