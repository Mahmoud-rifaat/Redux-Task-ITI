import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewBook, editBook } from '../store/slices/bookSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Spinner from './Spinner';

export default function BookForm() {
    const { books, isLoading } = useSelector((state) => state.bookList);
    let { id } = useParams()

    const dispatch = useDispatch();
    const navigate = useNavigate();
    let [formsValues, setFormValues] = useState({
        id: '',
        title: '',
        price: '',
        quantity: ''
    });

    const changeHandler = (e) => {
        setFormValues({
            ...formsValues,
            [e.target.name]: e.target.value
        })
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (id != 0) {
            dispatch(editBook({ id, formsValues }))
        }
        dispatch(addNewBook(formsValues)).then(() => {
            navigate('/books')
        })
    }

    useEffect(() => {
        if (id != 0) {
            let book = books.find((book) => book.id == id)
            setFormValues({ ...book })
        }
    }, [])

    return (
        <div className='alert alert-dark p-5 mt-5'>
            {isLoading && <Spinner></Spinner>}
            {!isLoading && <div className="container">
                <form onSubmit={submitHandler} >
                    <input onChange={changeHandler} name="title" value={formsValues.title} type="text" className='form-control mt-2' placeholder='Enter Book Title' />
                    <input onChange={changeHandler} name="price" value={formsValues.price} type="text" className='form-control mt-2' placeholder='Enter Book Price' />
                    <input onChange={changeHandler} name="quantity" value={formsValues.quantity} type="text" className='form-control mt-2' placeholder='Enter Book Qunatity' />

                    <button className='btn btn-success mt-5'>{id == 0 ? 'Add New Book' : 'Edit Book'}</button>
                </form>
            </div>}

        </div>
    )
}
