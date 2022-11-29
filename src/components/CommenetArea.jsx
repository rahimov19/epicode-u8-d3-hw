/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default function CommenetArea(props) {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: 1,
    elementId: props.asin,
  });

  function onChangeHandler(value, fieldToSet) {
    setNewComment({
      ...newComment,
      [fieldToSet]: value,
    });
  }

  async function onSubmitHandler(e, asin) {
    e.preventDefault();
    console.log(newComment);
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/`,
        {
          method: "POST",
          body: JSON.stringify(newComment),
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
        setNewComment({
          comment: "",
          rate: "",
          elementId: "",
        });
      } else {
        console.log("Error");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchComments() {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${props.asin}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZThmNGQ0YmUzZDAwMTU4NDVmYzYiLCJpYXQiOjE2NjkyOTc1OTAsImV4cCI6MTY3MDUwNzE5MH0.0vYjZiBh3fyWJADL5GtSORpe3Cuddnx-sNkWi4MYljU",
          },
        }
      );
      if (response.ok) {
        let data = await response.json();
        setComments(data);
        setIsLoading(false);
      } else {
        console.log("Error");
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.changeSelectedBook]);

  async function deleteComment(commID) {
    try {
      let response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${commID}`,
        {
          method: "DELETE",
          headers: {
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
  }

  return (
    <>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reviews of {props.cardTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {comments.map((comment) => (
            <div>
              <h4>{comment.author}</h4>
              <p>{comment.comment}</p>
              <p>{comment.rate} stars of 5</p>
              <Button
                variant="danger"
                className="mb-4"
                onClick={(e) => deleteComment(comment._id)}
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
                value={props.asin}
                onChange={(e) => onChangeHandler(e.target.value, "elementId")}
              />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rate</Form.Label>
              <Form.Control
                as="select"
                value={newComment.rate}
                onChange={(e) => onChangeHandler(e.target.value, "rate")}
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
                value={newComment.comment}
                onChange={(e) => onChangeHandler(e.target.value, "comment")}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={onSubmitHandler}>
            Submit Comment
          </Button>
        </Modal.Footer>
      </Modal>

      {!comments ? (
        <h1>No Comments to List</h1>
      ) : (
        comments.map((com) => (
          <div className="commentbox">
            <h2>{com.author}</h2>
            <p>{com.comment}</p>
            <p>{com.rate} stars of 5</p>
            <Button
              variant="danger"
              className="mb-4"
              onClick={(e) => deleteComment(com._id)}
            >
              Delete
            </Button>
          </div>
        ))
      )}
    </>
  );
}
