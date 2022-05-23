import React, { useState } from "react";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartBroken, faHeart } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";

const Book = ({ book, favourites, setFavourites }) => {
  const [fav, setFav] = useState(false);

  const { id, title, agents } = book;
  const { person } = agents[0];

  const handleClickFav = () => {
    setFav(!fav);

    const index = favourites.findIndex((fav) => fav.id === id);
    if (index === -1) {
      setFavourites([...favourites, { id, title }]);
    } else {
      const removeBookFromList = favourites.filter((fav) => fav.id !== id);
      setFavourites([...removeBookFromList]);
    }
  };

  return (
    <BookStyled>
      <div className="book-details">
        <h2>{title}</h2>
        <h3>{person}</h3>
      </div>

      <div className="img-container">
        <Link to={`/bookpage/${id}`}>
          <img
            src={`https://www.gutenberg.org/cache/epub/${id}/pg${id}.cover.medium.jpg`}
            alt={`${title} book cover`}
          />
        </Link>
        <button onClick={handleClickFav}>
          {fav ? (
            <FontAwesomeIcon icon={faHeartBroken} />
          ) : (
            <FontAwesomeIcon icon={faHeart} />
          )}
        </button>
      </div>
    </BookStyled>
  );
};

const BookStyled = styled.div`
  flex-basis: calc((100% - 1rem - 30px) / 5);
  flex-grow: 0;
  flex-shrink: 0;

  background-color: #b9aeae;
  border-radius: 12px;
  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  cursor: pointer;

  .book-details {
    text-align: center;

    h2 {
      margin-bottom: 0.8rem;
    }
  }

  .img-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin: 1rem;
    }

    button {
      border: none;
      background-color: transparent;
      font-size: 1.2rem;
      padding: 0 1rem;
      cursor: pointer;

      svg {
        margin-right: 1rem;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export default Book;
