import React, { useContext, useEffect } from "react";
import BuyBookForm from "./components/BuyForm/BuyBookForm";
import BooksContainer from "./components/Books/BooksContainer";
import ReturnBooksContainer from "./components/ReturnBooks/ReturnBooksContainer";
import mainContext from "./store/mainContext";
import axios from "axios";

const App = () => {
  const { setBooks, setReturnBooks } = useContext(mainContext);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/purchase/getBooks"
        );

        setBooks(data);

        const returnBooks = await axios.get(
          "http://localhost:5000/return/getBooks"
        );

        setReturnBooks(returnBooks.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <>
      <BuyBookForm />
      <BooksContainer />
      <ReturnBooksContainer />
    </>
  );
};

export default App;
