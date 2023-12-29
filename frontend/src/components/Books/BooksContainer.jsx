import React, { useContext } from "react";
import mainContext from "../../store/mainContext";
import Book from "./Book";

const BooksContainer = () => {
  const { books } = useContext(mainContext);

  return (
    <>
      <h1 className=" bg-blue-400 mt-10 p-2 text-white text-2xl">
        Purchase Books
      </h1>
      <div className=" flex gap-2 flex-wrap ">
        {books.length === 0 && (
          <div className=" flex justify-center items-center w-full">
            <h1 className="  text-2xl p-10 ">You didn't purchase any Books</h1>
          </div>
        )}
        {books.map((val) => {
          return (
            <Book
              id={val.id}
              key={Math.random().toString()}
              purchaseTime={val.purchaseTime}
              expireTime={val.expireTime}
              bookName={val.bookName}
            />
          );
        })}
      </div>
    </>
  );
};

export default BooksContainer;
