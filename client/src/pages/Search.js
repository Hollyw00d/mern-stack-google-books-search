import React, { Component } from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { Input, FormBtn } from "../components/Form";

class Search extends Component {
  state = {
    title: '',
    toResults: false,
    results: []
  };  

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    if(this.state.title) {
      const title = this.state.title.trim();

      API.getUnsavedBooks(title)
      .then(res => {
        this.setState({
            toResults: true,
            results: res.data.items
        });
        console.log(this.state.results);
      })
      .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12 sm-12">
            <ol>
              {this.state.results.length ? (
                  this.state.results.map(book => {
                    return (
                      <li key={book.volumeInfo.title}>
                        <strong>Title:</strong> {book.volumeInfo.title}<br />
                        <strong>Year Published:</strong> {book.volumeInfo.publishedDate}<br />
                        <a href={book.volumeInfo.previewLink} target="_blank"><strong>Google Book Link</strong></a><br />
                        <br />
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

export default Search;
