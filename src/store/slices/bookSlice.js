import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const baseURL = "http://localhost:3006/books";
const initialState = {
	books: [],
	isLoading: false,
	error: null,
};

export const getBooks = createAsyncThunk(
	"book/getBooks",
	async (args, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.get(baseURL);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const getBookById = createAsyncThunk(
	"book/getBookById",
	async (bookId, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.get(`${baseURL}/${bookId}`);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const editBook = createAsyncThunk(
	"book/editBook",
	async (bookData, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		const { id, formsValues } = bookData;

		try {
			const response = await axios.put(`${baseURL}/${id}`, formsValues);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const addNewBook = createAsyncThunk(
	"book/addNewBook",
	async (book, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			const response = await axios.post(baseURL, book);
			return response.data;
		} catch (error) {
			return rejectWithValue(error);
		}
	}
);

export const deleteBook = createAsyncThunk(
	"book/deleteBook",
	async (bookId, thunkAPI) => {
		const { rejectWithValue } = thunkAPI;
		try {
			await axios.delete(`${baseURL}/${bookId}`);
			return bookId;
		} catch (error) {
			console.log('Book Not Deleted');
			return rejectWithValue(error);
		}
	}
);



const bookSlice = createSlice({
	name: "book",
	initialState,
	reducers: {},
	extraReducers: {
		[getBooks.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getBooks.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.books = action.payload;
		},
		[getBooks.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// get a single book
		[getBookById.pending]: (state, action) => {
			state.isLoading = true;
		},
		[getBookById.fulfilled]: (state, action) => {
			state.isLoading = false;
			state.books = action.payload;
		},
		[getBookById.rejected]: (state, action) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		// add
		[addNewBook.fulfilled]: (state, action) => {
			// state.books.push(action.payload);
		},
		// edit
		[editBook.fulfilled]: (state, action) => {
			console.log(action);
			state.books.push(action.payload);
		},
		// delete
		[deleteBook.fulfilled]: (state, action) => {
			state.books = state.books.filter((book) => book.id != action.payload)
		}
	},
});

export const bookReducer = bookSlice.reducer;
export const bookActions = bookSlice.actions;
