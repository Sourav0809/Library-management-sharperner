import React, { useContext, useState } from "react";
import mainContext from "../../store/mainContext";
import FineForm from "../FineForm/FineForm";

const Book = ({ bookName, purchaseTime, expireTime, id }) => {
  const [payFine, setPayFine] = useState(false);
  const { setReturnBooks, setBooks } = useContext(mainContext);

  const findFine = (time) => {
    let currentTime = Date.now();
    let purchaseTime = Date.now(time);
    if (purchaseTime >= currentTime) {
      return 0;
    } else {
      return 299;
    }
  };

  const onReturnHandeler = () => {
    let currentTime = Date.now();
    let purchase = Date.now(purchaseTime);
    if (purchase < currentTime) {
      setPayFine(true);
    } else {
      const returnedInfo = {
        bookName: bookName,
        id: bookName,
        returnedTime: new Date().toLocaleString(),
        fine: 0,
      };

      // we have to remove the books from purchase container
      setBooks((prev) => {
        console.log(prev);
        return prev.filter((val) => val.id !== id);
      });

      // now we have to add in the return container
      setReturnBooks((prev) => {
        return [...prev, returnedInfo];
      });
    }
  };

  return (
    <div>
      {payFine ? (
        <>
          <FineForm
            fineAmount={findFine(expireTime)}
            bookName={bookName}
            purchaseTime={purchaseTime}
            expireTime={expireTime}
          />
        </>
      ) : (
        <>
          <h1>BookName : {bookName}</h1>
          <h1>Book Taken On : {purchaseTime}</h1>
          <h1>Book return Date : {expireTime}</h1>
          <h1>current Fine {findFine(expireTime)}</h1>
          <button onClick={onReturnHandeler}>Return</button>
        </>
      )}
    </div>
  );
};

export default Book;
