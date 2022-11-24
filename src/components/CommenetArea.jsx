import React, { Component } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default class CommenetArea extends Component {
  state = {
    commID: "",
    comments: [],
    Rate: "",
    Id: "",
    Comment: "",
    isLoading: false,
    newComment: {
      comment: "",
      rate: 1,
      elementId: this.props.asin,
    },
  };
  onChangeHandler = (value, fieldToSet) => {
    this.setState({
      newComment: { ...this.state.newComment, [fieldToSet]: value },
    });
  };

  onSubmitHandler = async (e, asin) => {
    e.preventDefault();
    console.log(this.state.newComment);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(this.state.newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjkyOTc1OTAsImV4cCI6MTY3MDUwNzE5MH0.0vYjZiBh3fyWJADL5GtSORpe3Cuddnx-sNkWi4MYljU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("New Comment Added");
        this.setState({
          newComment: {
            comment: "",
            rate: "",
            elementId: "",
          },
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  fetchComments = async (asin) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjkyOTc1OTAsImV4cCI6MTY3MDUwNzE5MH0.0vYjZiBh3fyWJADL5GtSORpe3Cuddnx-sNkWi4MYljU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        this.setState({
          comments: data,
          isLoading: false,
        });
      } else {
        console.log("Error");
        setTimeout(() => {
          this.state({ isLoading: false });
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      this.state({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchComments(this.props.asin);
  }

  deleteComment = async (commID) => {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commID}`,
        {
          method: "DELETE",
          //   body: JSON.stringify(this.state.newComment),
          headers: {
            //     "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjkyOTc1OTAsImV4cCI6MTY3MDUwNzE5MH0.0vYjZiBh3fyWJADL5GtSORpe3Cuddnx-sNkWi4MYljU",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        alert("Comment Deleted");
        window.location.reload(false);
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews of {this.props.cardTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.state.comments.map((comment) => (
            <div>
              <h4>{comment.author}</h4>
              <p>{comment.comment}</p>
              <p>{comment.rate} stars of 5</p>
              <Button
                variant="danger"
                className="mb-4"
                onClick={(e) => this.deleteComment(comment._id)}
              >
                Delete
              </Button>
            </div>
          ))}
          <h2>Add new Comment</h2>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="text"
                placeholder="ID"
                disabled
                value={this.props.asin}
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "elementId")
                }
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                value={this.state.newComment.rate}
                onChange={(e) => this.onChangeHandler(e.target.value, "rate")}
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Comment</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={this.state.newComment.comment}
                onChange={(e) =>
                  this.onChangeHandler(e.target.value, "comment")
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.onSubmitHandler}>
            Submit Comment
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
