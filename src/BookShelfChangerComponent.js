import React from 'react';


class BookShelfChangerComponent extends React.Component{

    constructor(props) {
        super(props);
        this.handleUpdateShelf = this.handleUpdateShelf.bind(this);

    }


    handleUpdateShelf(event) {

        this.props.updateShelf(this.props.book,{shelf:event.target.value});
    }

    matchBook() {

        let filtered = this.props.mybooks.filter((book) => book.id === this.props.book.id);

        if (filtered.length > 0) {
            return filtered[0].shelf;
        } else {
            return "none"
        }
    }



    render(){

        return (

            <div className="book-shelf-changer">
            <select
                defaultValue={this.matchBook()}
                onChange={this.handleUpdateShelf}>
                <option value="none" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>

        )
    }
}

export default BookShelfChangerComponent;