import React, { useContext, useState } from "react";
import mainContext from "../../store/mainContext";

const FineForm = ({ fineAmount, bookName, purchaseTime, expireTime }) => {
  const [fine, setFine] = useState(fineAmount);
  const { setBooks, setReturnBooks } = useContext(mainContext);
  const payFineHandeler = () => {
    const returnedInfo = {
      bookName: bookName,
      id: bookName,
      returnedTime: new Date().toLocaleString(),
      fine: fineAmount,
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
  };

  return (
    <div>
      <input value={fine} disabled />
      <button onClick={payFineHandeler}>Pay Fine</button>
    </div>
  );
};

export default FineForm;
