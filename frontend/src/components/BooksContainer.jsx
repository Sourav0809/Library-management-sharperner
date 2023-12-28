import React, { useContext } from "react";
import mainContext from "../store/mainContext";
import Book from "./Book";

const BooksContainer = () => {
  const { books } = useContext(mainContext);

  return (
    <>
      {books.map((val) => {
        return (
          <Book
            key={Math.random().toString()}
            purchaseTime={val.purchaseTime}
            expireTime={val.expireTime}
            bookName={val.bookName}
          />
        );
      })}
    </>
  );
};

export default BooksContainer;
