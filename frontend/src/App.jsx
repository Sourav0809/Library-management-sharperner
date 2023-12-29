import React from "react";
import BuyBookForm from "./components/BuyForm/BuyBookForm";
import BooksContainer from "./components/Books/BooksContainer";
import ReturnBooksContainer from "./components/ReturnBooks/ReturnBooksContainer";

const App = () => {
  return (
    <>
      <BuyBookForm />
      <BooksContainer />
      <ReturnBooksContainer />
    </>
  );
};

export default App;
