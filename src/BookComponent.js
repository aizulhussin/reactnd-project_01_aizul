import React from 'react';
import BookShelfChangerComponent from './BookShelfChangerComponent.js'


class BookComponent extends React.Component {




    render() {

        return (
            <div className={this.props.divClassName}>
                <ol className="books-grid">

                    {Array.isArray(this.props.books) && this.props.books.map((book) => (

                        <li key={book.id}>
                            <div className="book">
                                <div className="book-top">
                                    <div className="book-cover"
                                        style={{
                                            width: 128, height: 193,
                                            backgroundImage: `url(${book.imageLinks.thumbnail})`
                                        }}></div>
                                    <BookShelfChangerComponent
                                        book={book}
                                        mybooks={this.props.mybooks}
                                        updateShelf={this.props.updateShelf}
                                    />

                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.authors !== undefined && book.authors.join()}</div>
                            </div>
                        </li>
                    ))}

                </ol>
            </div>
        );
    }
}

export default BookComponent;
