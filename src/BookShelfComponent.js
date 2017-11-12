import React from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'


class BookShelfComponent extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        getBooks: PropTypes.func.isRequired,
        updateShelf:PropTypes.func.isRequired
    }

    
    constructor(props) {
        super(props);
        this.state = {
            /**
             * TODO: Instead of using this state variable to keep track of which page
             * we're on, use the URL in the browser's address bar. This will ensure that
             * users can use the browser's back and forward buttons to navigate between
             * pages, as well as provide a good URL they can bookmark and share.
             */
            showSearchPage: false

        }

        this.handleUpdateShelf = this.handleUpdateShelf.bind(this);

    }


    handleUpdateShelf(event) {

        let o = JSON.parse(event.target.value);
        let shelf = {shelf:o.shelf};
        this.props.updateShelf(o.book,shelf);
    }



    render() {

        let books = this.props.books;

        if (books.length > 0) {

            let currentlyReading = books.filter((b) => b.shelf === 'currentlyReading');
            let read = books.filter((b) => b.shelf === 'read')
            let wantToRead = books.filter((b) => b.shelf === 'wantToRead')


            return (<div className="app">

                        <div className="list-books">
                            <div className="list-books-title">
                                <h1>MyReads</h1>
                            </div>
                            <div className="list-books-content">
                                <div>
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Currently Reading</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">

                                                {currentlyReading.map((book) => (

                                                    <li key={book.id}>
                                                        <div className="book">
                                                            <div className="book-top">
                                                                <div className="book-cover"
                                                                    style={{
                                                                        width: 128, height: 193,
                                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                                    }}></div>
                                                                <div className="book-shelf-changer">
                                                                    <select defaultValue={`{"book":{"id":"${book.id}"},"shelf":"currentlyReading"}`} onChange={this.handleUpdateShelf}>
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
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Want to Read</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {wantToRead.map((book) => (

                                                    <li key={book.id}>
                                                        <div className="book">
                                                            <div className="book-top">
                                                                <div className="book-cover"
                                                                    style={{
                                                                        width: 128, height: 193,
                                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                                    }}></div>
                                                                <div className="book-shelf-changer">
                                                                    <select defaultValue={`{"book":{"id":"${book.id}"},"shelf":"wantToRead"}`} onChange={this.handleUpdateShelf}>
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
                                    <div className="bookshelf">
                                        <h2 className="bookshelf-title">Read</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {read.map((book) => (

                                                    <li key={book.id}>
                                                        <div className="book">
                                                            <div className="book-top">
                                                                <div className="book-cover"
                                                                    style={{
                                                                        width: 128, height: 193,
                                                                        backgroundImage: `url(${book.imageLinks.thumbnail})`
                                                                    }}></div>
                                                                <div className="book-shelf-changer">
                                                                    <select defaultValue={`{"book":{"id":"${book.id}"},"shelf":"read"}`} onChange={this.handleUpdateShelf}>
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
                                </div>
                            </div>
                            <div className="open-search">
                                <Link to='/search'>Add a book</Link>
                            </div>
                        </div>
                    )}
            </div>);

        }

        return (<div>Loading...</div>)

    }

}

export default BookShelfComponent;