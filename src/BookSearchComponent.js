import React from 'react';
import { Link } from 'react-router-dom'



class BookSearchComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchInput: ''
        }
        this.handleSearchInput = this.handleSearchInput.bind(this);
        this.handleUpdateShelf = this.handleUpdateShelf.bind(this);
    }



    handleUpdateShelf(event) {

        let o = JSON.parse(event.target.value);
        let shelf = { shelf: o.shelf };
        this.props.updateShelf(o.book, shelf);
    }


    handleSearchInput(event) {

        let query = event.target.value;
        console.log(query);
        this.props.searchBooks(query, 20);

    }

    matchBook(bookId) {

        let filtered = this.props.books.filter((book) => book.id === bookId);

        if (filtered.length > 0) {
            let book = filtered[0];
            return `{"book":{"id":"${book.id}"},"shelf":"${book.shelf}"}`
        } else {
            return "none"
        }
    }


    render() {

        let books = this.props.searchResult;
    
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to='/'>Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" onChange={this.handleSearchInput} placeholder="Search by title or author" />
                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">

                        {Array.isArray(books) && books.map((book) => (

                            <li key={book.id}>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover"
                                            style={{
                                                width: 128, height: 193,
                                                backgroundImage: `url(${book.imageLinks.thumbnail})`
                                            }}></div>
                                        <div className="book-shelf-changer">
                                            <select
                                                defaultValue={this.matchBook(book.id)}
                                                onChange={this.handleUpdateShelf}>
                                                <option value="none" disabled>Move to...</option>
                                                <option value={`{"book":{"id":"${book.id}"},"shelf":"currentlyReading"}`}>Currently Reading</option>
                                                <option value={`{"book":{"id":"${book.id}"},"shelf":"wantToRead"}`}>Want to Read</option>
                                                <option value={`{"book":{"id":"${book.id}"},"shelf":"read"}`}>Read</option>
                                                <option value="none">None</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors!==undefined && book.authors.join()}</div>
                                </div>
                            </li>
                        ))}

                    </ol>
                </div>
            </div>

        );

    }

}

export default BookSearchComponent;