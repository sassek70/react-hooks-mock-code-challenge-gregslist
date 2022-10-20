import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listings, handleDelete}) {

  const listingItem = listings.map((listing) => {
    const { id, description, image, location } = listing
    return <ListingCard key={id} id={id}description={description} image={image} location={location} handleDelete={handleDelete}/>
  })

  return (
    <main>
      <ul className="cards">
        {listingItem}
      </ul>
    </main>
  );
}

export default ListingsContainer;
