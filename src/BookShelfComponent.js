import React from 'react';
import { Link } from 'react-router-dom'
import BookComponent from './BookComponent.js'


class BookShelfComponent extends React.Component {

   

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
                                <BookComponent
                                    mybooks={books}
                                    books={currentlyReading}
                                    divClassName="bookshelf-books"
                                    updateShelf={this.props.updateShelf}
                                />
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Want to Read</h2>
                                <BookComponent
                                    mybooks={books}
                                    books={wantToRead}
                                    divClassName="bookshelf-books"
                                    updateShelf={this.props.updateShelf}
                                />
                            </div>
                            <div className="bookshelf">
                                <h2 className="bookshelf-title">Read</h2>
                                <BookComponent
                                    mybooks={books}
                                    books={read}
                                    divClassName="bookshelf-books"
                                    updateShelf={this.props.updateShelf}
                                />
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