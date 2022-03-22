import { useState } from "react";
import Countries from "./Countries";

function Search({ countries }) {
  const [search, setSearch] = useState("");

  const submittNewSearch = (e) => {
    e.preventDefault();
  };

  const handlerSearch = (e) => {
    setSearch(e.target.value);
  };

  const filterByName = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <form onSubmit={submittNewSearch}>
        Find Countries: <input value={search} onChange={handlerSearch} />
      </form>
      <Countries allCountry={filterByName} />
    </>
  );
}

export default Search;
