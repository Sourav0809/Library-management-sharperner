import React, { useContext } from "react";
import mainContext from "../../store/mainContext";
import ReturnBook from "./ReturnBook";

const ReturnBooksContainer = () => {
  const { returnBooks } = useContext(mainContext);

  return (
    <>
      <h1>Return Books</h1>
      {returnBooks.map((books) => {
        return (
          <ReturnBook
            key={Math.random().toString()}
            bookName={books.bookName}
            returnedTime={books.returnedTime}
            fine={books.fine}
          />
        );
      })}
    </>
  );
};

export default ReturnBooksContainer;
