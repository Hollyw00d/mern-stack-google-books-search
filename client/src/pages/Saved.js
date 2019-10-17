import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }    

  loadBooks() {
    API.getBooks()
    .then(res => this.setState({
      books: res.data
    }))
    .catch(err => console.log(err.response));
  }

  deleteBook(bookId) {
    API.deleteBook(bookId)
      .then(res => {
        alert('Deleted book!')
        this.loadBooks();
      })
      .catch(err => console.log(err.response));
  }


  render() {
    return (
      <Container fluid>
        <Row>
        <Col size="md-12 sm-12">
            <ol>
              {this.state.books.length ? (
                  this.state.books.map(book => {
                    return (
                      <li key={book.title}>
                        <strong>Title:</strong> {book.title}<br />
                        <strong>Year Published:</strong> {book.publishedDate}<br />
                        <a href={book.previewLink} target="_blank"><strong>Google Book Link</strong></a><br />
                        <button className="btn" onClick={() => this.deleteBook(book._id)}>Delete from Saved Books</button>
                        <br /><br />
                      </li>
                    );
                  })
              ) : (
                <h3>No Results to Display</h3>
              )}
            </ol>
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Saved;
