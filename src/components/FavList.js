import React from "react";
import { Link } from "react-router-dom";

const FavList = ({ favourites }) => {
  return (
    <>
      <h3>Your favourites books</h3>
      <ul>
        {favourites.map((fav) => (
          <Link to={`/bookpage/${fav.id}`} key={fav.id}>
            <li>
              <p>{fav.title}</p>
            </li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default FavList;
