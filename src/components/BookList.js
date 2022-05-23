import React from "react";
import styled from "styled-components";
import axios from "axios";

import Book from "./Book";
import Nav from "./Nav";
import Favourites from "./Favourites";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { useEffect, useState } from "react";

import loadAnim from "../imgs/Spinner-1.2s-231px.svg";

const BookList = () => {
  const [books, setBooks] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [counter, setCounter] = useState(2);
  const [favourites, setFavourites] = useState([]);
  const [show, setShow] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    axios
      .get("https://gnikdroy.pythonanywhere.com/api/book/")
      .then((response) => setBooks(response.data.results))
      .then(() => setIsLoading(!isLoading));
  }, []);

  const handleFetchMore = () => {
    axios
      .get(`https://gnikdroy.pythonanywhere.com/api/book/?page=${counter}`)
      .then((response) => setBooks([...books, ...response.data.results]));
    setCounter(counter + 1);
  };

  return (
    <>
      <Nav
        show={show}
        setShow={setShow}
        setQuery={setQuery}
        query={query}
        setBooks={setBooks}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
      <BookListStyled className={show ? "show" : "hide"}>
        {isLoading ? (
          <img src={loadAnim} alt="" />
        ) : (
          books.map((book) => (
            <Book
              book={book}
              key={book.id}
              favourites={favourites}
              setFavourites={setFavourites}
            />
          ))
        )}
      </BookListStyled>
      <Favourites
        favourites={favourites}
        setFavourites={setFavourites}
        show={show}
      />
      {isLoading ? null : query === "" ? (
        <Button onClick={() => handleFetchMore()}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Load More
        </Button>
      ) : null}
    </>
  );
};

const BookListStyled = styled.div`
  width: 100%;
  padding: 0.5rem;
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  transition: 0.6s;

  &.show {
    width: 80%;
  }
`;

const Button = styled.button`
  display: block;
  width: auto;
  margin: 1rem auto;

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
`;

export default BookList;
