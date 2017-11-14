import React from 'react';


class BookComponent extends React.Component {


    constructor(props) {
        super(props);
        this.handleUpdateShelf = this.handleUpdateShelf.bind(this);

    }


    handleUpdateShelf(event) {

        let o = JSON.parse(event.target.value);
        let shelf = { shelf: o.shelf };
        this.props.updateShelf(o.book, shelf);
    }

    matchBook(bookId) {
        
        let filtered = this.props.mybooks.filter((book) => book.id === bookId);

        if (filtered.length > 0) {
            let book = filtered[0];
            return `{"book":{"id":"${book.id}"},"shelf":"${book.shelf}"}`
        } else {
            return "none"
        }
    }


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
