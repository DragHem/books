import styled from "styled-components";

import FavList from "./FavList";

function Favourites({ favourites, show }) {
  return (
    <FavStyled className={show ? "show" : "hide"}>
      {favourites.length === 0 ? (
        <h3>You don't have favourites books yet</h3>
      ) : (
        <FavList favourites={favourites} />
      )}
    </FavStyled>
  );
}

const FavStyled = styled.div`
  position: fixed;
  top: 0;
  left: 100%;
  width: 20%;
  height: 100vh;
  background-color: #b4b4b4;
  transition: 0.6s;

  h3 {
    margin-top: 1rem;
    text-align: center;
  }

  li {
    margin-top: 0.4rem;
    text-align: center;
    padding: 0.4rem;
    cursor: pointer;

    p:hover {
      text-decoration: underline;
    }
  }

  &.show {
    left: 80%;
  }
`;

export default Favourites;
