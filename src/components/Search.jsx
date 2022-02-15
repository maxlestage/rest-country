import { useState } from "react";
import Countries from "./Countries";

function Search({ name }) {
  const [search, setSearch] = useState("");

  const submittNewSearch = (e) => {
    e.preventDefault();
    console.log("button clicked", e.target);
  };

  const handlerSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  // console.log(name);

  const filterByName = name.filter((n) => {
    return n.toLowerCase().includes(search.toLowerCase());
  });
  console.log(filterByName);

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
