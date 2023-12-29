import React from "react";

const ReturnBook = ({ returnedTime, bookName, fine }) => {
  return (
    <div className=" mt-2 flex flex-col justify-center items-start gap-2 px-4 py-2 bg-lime-700   text-white text-xl rounded-md">
      <h1>Book-Name : {bookName}</h1>
      <h1>Fine : {fine}</h1>
      <h1>Returned Time : {returnedTime}</h1>
    </div>
  );
};

export default ReturnBook;
