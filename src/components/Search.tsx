import React, { useState } from "react";
import { ISearchProps } from "./App";

const Search = (props : ISearchProps) => {
  const [searchValue, setSearchValue] = useState<string>("");
  
  const handleSearchInputChanges = (e : React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("")
  }

  const callSearchFunction = (e : React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }

  return (
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
    );
}

export default Search;