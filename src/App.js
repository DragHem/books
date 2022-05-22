import { Routes, Route } from "react-router-dom";

import BookList from "./components/BookList";
import BookPage from "./components/BookPage";

import GlobalStyle from "./components/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/bookpage/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
