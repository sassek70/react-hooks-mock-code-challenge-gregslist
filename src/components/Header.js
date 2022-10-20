import React from "react";
import Search from "./Search";

function Header({listings, searchResults}) {
  
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search listings={listings} searchResults={searchResults}/>
    </header>
  );
}

export default Header;
