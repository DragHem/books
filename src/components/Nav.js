import styled from "styled-components";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Nav = ({
  show,
  setShow,
  setQuery,
  query,
  setBooks,
  isLoading,
  setIsLoading,
}) => {
  const handleClickShow = () => {
    setShow(!show);
  };

  const handleSetQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSearchBooks = async () => {
    if (query !== "") {
      await setIsLoading(!isLoading);
      await axios
        .get(`https://gnikdroy.pythonanywhere.com/api/book/?search=${query}`)
        .then((response) => setBooks(response.data.results))
        .then(() => setIsLoading(false));
    } else {
      await setIsLoading(!isLoading);
      await axios
        .get(`https://gnikdroy.pythonanywhere.com/api/book/`)
        .then((response) => setBooks(response.data.results))
        .then(() => setIsLoading(false));
    }
  };

  return (
    <StyledNav className={show ? "show" : "hide"}>
      <Link to="/">
        <Title>Feel free to read</Title>
      </Link>
      <div>
        <input
          type="text"
          placeholder="Search more..."
          onChange={handleSetQuery}
        />
        <button onClick={handleSearchBooks}>
          {" "}
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          Search
        </button>
      </div>
      <button onClick={handleClickShow}>
        <FontAwesomeIcon icon={faBookmark} />
        Favourites
      </button>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 5vh;
  width: 100%;
  background-color: #ababab;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  transition: 0.6s;

  @media screen and (min-width: 700px) {
  }
  &.show {
    width: 80%;
  }

  input {
    border: none;
    font-size: 1.2rem;
    background-color: transparent;
    border-bottom: 1px solid black;
  }

  div input {
    button {
      margin-left: 1rem;
    }
  }

  button {
    border: none;
    background-color: transparent;
    font-size: 1.2rem;
    cursor: pointer;

    svg {
      margin-right: 1rem;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    div {
      margin: 1.4rem 0;
      input {
        width: 50%;
        margin: 0 auto;
      }
    }
  }
`;

const Title = styled.h1`
  font-family: "Lobster", cursive;
  font-size: 2rem;
`;

export default Nav;
