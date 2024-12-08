import { useState } from "react";
import "./AddBook.css";

function AddBook() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: "",
    author: "",
    read: false,
  });

  function addBook() {
    if (newBook.title && newBook.author) {
      setBooks([...books, newBook]);
      setNewBook({ title: "", author: "", read: false });
    }
  }

  function toggleRead(index) {
    const updatedBooks = [...books];
    updatedBooks[index].read = !updatedBooks[index].read;
    setBooks(updatedBooks);
  }

  function deleteBook(index) {
    if (window.confirm("Kitobni aniq ochirasizmi!!!")) {
      setBooks(books.filter((value, i) => i != index));
    }
  }

  return (
    <div className="addbook-container">
      <h1 className="addbook-title">Book List</h1>
      <div className="addbook-input-container">
        <input
          type="text"
          placeholder="Kitob nomini kiriting"
          value={newBook.title}
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
          className="addbook-input"
        />
        <input
          type="text"
          placeholder="Kitob muallifini kiriting"
          value={newBook.author}
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
          className="addbook-input"
        />
        <button onClick={addBook} className="addbook-button">
          Add Book
        </button>
      </div>
      <div className="addbook-card">
        <ul className="addbook-list">
          {books.map((value, index) => (
            <li
              key={index}
              className={`addbook-item ${value.read ? "read" : "unread"}`}
            >
              <div className="addbook-item-content">
                <h3 className="title">{value.title}</h3>
                <p className="author">{value.author}</p>
                <div className="addbook-item-actions">
                  <button
                    onClick={() => toggleRead(index)}
                    className="toggle-read"
                  >
                    Toggle Read
                  </button>
                  <button
                    onClick={() => deleteBook(index)}
                    className="delete-book"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AddBook;
