import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])

    useEffect(() => {
      fetch(`http://localhost:6001/listings`)
      .then(res => res.json())
      .then((listingsArray) =>setListings(listingsArray))
    },[])

    const handleDelete = (id) => {
      const newListings = listings.filter((listing) => listing.id !== id)
      setListings(newListings)
      persistDelete(id)
    }  

    const persistDelete = (id) => {
      fetch(`http://localhost:6001/listings/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(listings)
      })
    }

    const searchResults = (query) => {
      const searchQuery = listings.filter((listing) => listing.description.toLowerCase().includes(query.toLowerCase()))
      setListings(searchQuery)
    }
    

  return (
    <div className="app">
      <Header listings={listings} searchResults={searchResults}/>
      <ListingsContainer listings={listings} handleDelete={handleDelete}/>
    </div>
  );
}

export default App;
