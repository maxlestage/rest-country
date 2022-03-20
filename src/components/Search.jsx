import { useState } from "react";
import Countries from "./Countries";

function Search({ countries }) {
  const [search, setSearch] = useState("");

  const submittNewSearch = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
  };

  const handlerSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  const filterByName = countries.filter((country) => {
    // const name = country.map((n) => n.name.common);
    // console.log(name);
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
