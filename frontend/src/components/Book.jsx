import React from "react";

const Book = (props) => {
  const findFine = (time) => {
    let currentTime = Date.now();
    let purchaseTime = Date.now(time);
    if (purchaseTime >= currentTime) {
      return 0;
    } else {
      return 299;
    }
  };
  return (
    <div>
      <h1>BookName : {props.bookName}</h1>
      <h1>Book Taken On : {props.purchaseTime}</h1>
      <h1>Book return Date : {props.expireTime}</h1>
      <h1>current Fine {findFine(props.expireTime)}</h1>
      <button>Return</button>
    </div>
  );
};

export default Book;
