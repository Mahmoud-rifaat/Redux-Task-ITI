import React, { useEffect } from "react";
import BookItem from "./BookItem";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../store/slices/bookSlice";
import { NavLink } from "react-router-dom";
import Spinner from "./Spinner";


export default function BookList() {
  const { books, isLoading } = useSelector((state) => state.bookList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);


  return (
    <div className="bg p-5  bg-dark text-light mt-5">
      <h1>Books List</h1>
      <NavLink to="/books/0/edit" className="mb-5 btn btn-outline-primary">
        Add New Book
      </NavLink>
      <div className="container">
        {isLoading && <Spinner></Spinner>}
        {!isLoading &&
          books.map((book) => <BookItem key={book.id} book={book} />)}
      </div>
    </div>
  );
}
