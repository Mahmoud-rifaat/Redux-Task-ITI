// import Counter from "./components/01-Counter With redux";
import "./App.css";
import { Route, Routes } from "react-router-dom";
// import MyNav from "./components/MyNav";
// import BookList from "./components/BookList";
// import BookDetails from "./components/BookDetails";
// import BookForm from "./components/BookForm";
import { MyNav, BookDetails, BookForm, BookList, Counter } from "./components";

function App() {
  return (
    <>
      <MyNav />
      <Routes>
        <Route path="/" element={<Counter />} />
        <Route path="books" element={<BookList />} />
        <Route path="books/:id" element={<BookDetails />} />
        <Route path="books/:id/edit" element={<BookForm />} />
      </Routes>
    </>
  );
}

export default App;
