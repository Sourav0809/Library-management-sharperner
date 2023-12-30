import React, { useContext, useState } from "react";
import mainContext from "../../store/mainContext";
import axios from "axios";
const BuyBookForm = () => {
  const bookctx = useContext(mainContext);
  const [bookName, setBookName] = useState("");

  const submitFormHandeler = async (e) => {
    e.preventDefault();
    const submittedData = {
      bookName: bookName,
      purchaseTime: new Date().toLocaleString(),
      expireTime: new Date(
        new Date().getTime() + 1 * 60 * 60 * 1000
      ).toLocaleString(), // 1 hour in milliseconds
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/purchase/addBook",
        submittedData
      );
      if (data) {
        submittedData.id = data.id;
        bookctx.setBooks((prev) => {
          return [...prev, submittedData];
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form
        onSubmit={submitFormHandeler}
        className=" flex items-center gap-3 bg-blue-950 p-5 text-white"
      >
        <label className=" text-xl">Book Name</label>
        <input
          type="text"
          value={bookName}
          onChange={(e) => {
            setBookName(e.target.value);
          }}
          className="text-black p-1 w-[20%]"
        />
        <button
          type="submit"
          className=" px-6 py-1 rounded-md bg-blue-600 text-white"
        >
          Buy
        </button>
      </form>
    </div>
  );
};

export default BuyBookForm;
