import React, { useContext } from "react";
import mainContext from "../../store/mainContext";
import ReturnBook from "./ReturnBook";

const ReturnBooksContainer = () => {
  const { returnBooks } = useContext(mainContext);

  return (
    <>
      <h1 className=" bg-lime-700 p-2 text-2xl text-white mt-10">
        Return Books
      </h1>
      <div className="flex gap-2 flex-wrap">
        {returnBooks.length === 0 && (
          <div className=" flex justify-center items-center w-full">
            <h1 className="  text-2xl p-10 ">You didn't Return any Books</h1>
          </div>
        )}
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
      </div>
    </>
  );
};

export default ReturnBooksContainer;
