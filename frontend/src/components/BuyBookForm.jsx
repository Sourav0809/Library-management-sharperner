import React, { useContext, useState } from "react";
import mainContext from "../store/mainContext";

const BuyBookForm = () => {
  const bookctx = useContext(mainContext);
  const [bookName, setBookName] = useState("");

  const submitFormHandeler = (e) => {
    e.preventDefault();
    const submitedData = {
      bookName: bookName,
      purchaseTime: new Date().toLocaleString(),
      expireTime: new Date(
        new Date().getTime() + 1 * 60 * 60 * 1000
      ).toLocaleString(),
    };
    bookctx.setBooks((prev) => {
      return [...prev, submitedData];
    });
    console.log(submitedData);
  };

  return (
    <div>
      <form onSubmit={submitFormHandeler}>
        <label>Book Name</label>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
        />
        <button type="submit">Buy</button>
      </form>
    </div>
  );
};

export default BuyBookForm;
