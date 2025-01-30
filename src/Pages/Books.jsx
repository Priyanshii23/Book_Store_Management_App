import React, { useState } from "react";
import "../Components/style/navbar.css"
const Books = (book) => {
  const [books, setbooks] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchBook = async (e) => {
    try{
        const response = await axios.get(
            "https://rare-nebula-receipt.glitch.me/books",
         
          );
    } 
    catch(err){
        setError(response.data.message)
    }
  
    // console.log(response)
    //    setBooks(response.data.books)
  };
  // console.log(books)

//   {isLoading }return <p>Loading Books...</p>
// {error} return <p> {err}</p>
  return (
    <div className="books-container">
      <h1> Welcome to Book Store Management App</h1>

      <div className="book-card">
       <img src={book.coverImage} alt="" />
      <h1>Name: {book.name} </h1>
        <h3>Category:{book.category} </h3>
        <h3>Price: ₹ {book.price} </h3>
        <p> {book.desciption}</p>
      </div>
    </div>
  );
};

export default Books;
