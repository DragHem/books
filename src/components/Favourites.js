import styled from "styled-components";
import { Link } from "react-router-dom";

function Favourites({ favourites, show }) {
  return (
    <FavStyled className={show ? "show" : "hide"}>
      <ul>
        {favourites.length === 0 ? (
          <p>You don't have favourites books yet</p>
        ) : (
          favourites.map((fav) => (
            <Link to={`/bookpage/${fav.id}`} key={fav.id}>
              <li>{fav.title}</li>
            </Link>
          ))
        )}
      </ul>
    </FavStyled>
  );
}

const FavStyled = styled.div`
  position: fixed;
  top: 0;
  left: 100%;
  width: 20%;
  height: 100vh;
  background-color: red;
  transition: 1s;

  p {
    margin-top: 10rem;
    text-align: center;
  }

  li {
    margin-top: 0.4rem;
  }

  &.show {
    left: 80%;
  }
`;

export default Favourites;
