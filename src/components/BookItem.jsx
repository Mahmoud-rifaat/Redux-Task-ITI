import React from 'react'
import { NavLink } from 'react-router-dom'
import { deleteBook } from '../store/slices/bookSlice'
import { useDispatch } from 'react-redux'

export default function BookItem(props) {

    const dispatch = useDispatch();

    let removeBook = (bookId) => {
        dispatch(deleteBook(bookId));
    }

    const { book } = props
    return (
        <div className="border p-3 rounded mt-5 text-center">
            <h2>{book.title}</h2>
            <p>Some Description</p>
            <p>Price: ${book.price}</p>
            <NavLink className='btn btn-info m-1' to={`/books/${book.id}`}>View Book Details</NavLink>
            <button className='btn btn-warning m-1'>Read Book</button>
            <NavLink className='btn btn-success m-1' to={`/books/${book.id}/edit`}>Edit Book</NavLink>
            <button onClick={() => removeBook(book.id)} className='btn btn-danger m-1'>delete Book</button>

        </div>
    )
}
