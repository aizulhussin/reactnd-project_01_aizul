import React from 'react'
import './App.css'
import * as BooksAPI from './BooksAPI'
import BookShelfComponent from './BookShelfComponent.js'
import BookSearchComponent from './BookSearchComponent.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'


class BooksApp extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      books: [],
      searchResult:[]
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {

    BooksAPI.getAll().then(books => {
      this.setState({ books })
    })
  }


  updateShelf = (book, shelf) => {

    BooksAPI.update(book, shelf).then(result => {
      this.getBooks();
    });
  }

  searchBooks = (query,maxResult) =>{
    console.log("Search Books");
    BooksAPI.search(query,maxResult).then(result =>{
      console.log(result);
      this.setState({searchResult:result})
    });
  }


  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' render={() => (

            <BookShelfComponent
              getBooks={this.getBooks}
              books={this.state.books}
              updateShelf={this.updateShelf}
            />
          )} />
          <Route path='/search' render={() => (
            <BookSearchComponent
              getBooks={this.getBooks}
              updateShelf={this.updateShelf}
              searchBooks={this.searchBooks}
              books={this.state.books}
              searchResult={this.state.searchResult}
            />
          )} />
        </div>
      </Router>
    )
  }
}

export default BooksApp
