import { useParams } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import styled from "styled-components";

const BookPage = () => {
  const { id } = useParams();

  return (
    <>
      <GlobalStyle />
      <Frame
        src={`https://www.gutenberg.org/files/${id}/${id}-h/${id}-h.htm`}
      ></Frame>
    </>
  );
};

const Frame = styled.iframe`
  width: 100%;
  height: 100vh;
`;

const GlobalStyle = createGlobalStyle`
body {
  overflow-y: hidden;
}


`;

export default BookPage;
