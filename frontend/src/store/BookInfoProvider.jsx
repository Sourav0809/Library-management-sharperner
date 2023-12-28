import React, { useState } from "react";
import mainContext from "./mainContext";
const BookInfoProvider = (props) => {
  const [books, setBooks] = useState([]);

  const bookSetHandeler = (newBook) => {
    setBooks((prev) => {
      return [...prev, newBook];
    });
  };
  const providerValues = {
    books: books,
    setBooks: setBooks,
  };
  return (
    <mainContext.Provider value={providerValues}>
      {props.children}
    </mainContext.Provider>
  );
};

export default BookInfoProvider;
