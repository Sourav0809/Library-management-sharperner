import React, { useContext, useState } from "react";
import mainContext from "../../store/mainContext";
import axios from "axios";
const FineForm = ({ fineAmount, bookName, purchaseTime, expireTime, id }) => {
  const [fine, setFine] = useState(fineAmount);
  const { setBooks, setReturnBooks } = useContext(mainContext);
  const payFineHandeler = async () => {
    try {
      const returnedInfo = {
        bookName: bookName,
        returnedTime: new Date().toLocaleString(),
        fine: fineAmount,
        id: id,
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
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <input value={fine} disabled />
      <button onClick={payFineHandeler}>Pay Fine</button>
    </div>
  );
};

export default FineForm;
