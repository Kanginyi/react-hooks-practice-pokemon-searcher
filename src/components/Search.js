import React from "react";

function Search({ setSearch }) {
  console.log("Rendering Search")

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={(e) => setSearch(e.target.value)} className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
