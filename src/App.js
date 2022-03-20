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
      }),
    []
  );

  return (
    <>
      <Search countries={countries} />
    </>
  );
}

export default App;
