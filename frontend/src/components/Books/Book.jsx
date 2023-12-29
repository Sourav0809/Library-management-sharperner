import React, { useContext, useState } from "react";
import mainContext from "../../store/mainContext";
import FineForm from "../FineForm/FineForm";
import axios from "axios";

const Book = ({ bookName, purchaseTime, expireTime, id }) => {
  const [payFine, setPayFine] = useState(false);
  const { setReturnBooks, setBooks } = useContext(mainContext);

  const findFine = (time) => {
    let currentTime = Date.now();
    let expireTime = Date.now(time);

    if (expireTime >= currentTime) {
      return 0;
    } else {
      return 299;
    }
  };

  const onReturnHandeler = async () => {
    try {
      if (findFine(expireTime) === 299) {
        console.log("hello");
        setPayFine(true);
      } else {
        const returnedInfo = {
          bookName: bookName,
          id: id,
          returnedTime: new Date().toLocaleString(),
          fine: 0,
        };

        const { data } = await axios.post(
          "http://localhost:5000/return/addBook",
          returnedInfo
        );
        console.log(data);

        if (data) {
          returnedInfo.id = data.id;

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
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {payFine ? (
        <>
          <FineForm
            fineAmount={findFine(expireTime)}
            id={id}
            bookName={bookName}
            purchaseTime={purchaseTime}
            expireTime={expireTime}
          />
        </>
      ) : (
        <>
          <div className=" mt-2 flex flex-col justify-center items-start gap-2 px-4 py-2 bg-blue-400 text-white text-xl rounded-md">
            <h1>BookName : {bookName}</h1>
            <h1>Book Taken On : {purchaseTime}</h1>
            <h1>Book return Date : {expireTime}</h1>
            <h1>Current Fine : {findFine(expireTime)}</h1>
            <button
              onClick={onReturnHandeler}
              className=" bg-blue-950 px-5 py-1 rounded-md "
            >
              Return
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Book;
