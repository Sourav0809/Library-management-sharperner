import React, { useState } from "react";
import mainContext from "./mainContext";
const BookInfoProvider = (props) => {
  const [books, setBooks] = useState([]);
  const [returnBooks, setReturnBooks] = useState([]);
  const bookSetHandeler = (newBook) => {
    setBooks((prev) => {
      return [...prev, newBook];
    });
  };
  const providerValues = {
    books: books,
    setBooks: setBooks,
    returnBooks: returnBooks,
    setReturnBooks: setReturnBooks,
  };
  return (
    <mainContext.Provider value={providerValues}>
      {props.children}
    </mainContext.Provider>
  );
};

export default BookInfoProvider;
