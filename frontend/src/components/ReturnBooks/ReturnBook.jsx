import React from "react";

const ReturnBook = ({ returnedTime, bookName, fine }) => {
  return (
    <div>
      <h1>BookName : {bookName}</h1>
      <h1>fine : {fine}</h1>
      <h1>returned Time : {returnedTime}</h1>
    </div>
  );
};

export default ReturnBook;
