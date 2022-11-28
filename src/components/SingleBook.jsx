import { Card } from "react-bootstrap";
import BadgeComp from "./BadgeComp.jsx";
import CommenetArea from "./CommenetArea.jsx";
import React, { Component } from "react";

export default class SingleBook extends Component {
  state = {
    selected: false,
    show: false,
    selectedBook: false,
  };

  toggleCard = () => {
    console.log("clikc");
    this.setState({
      selected: !this.state.selected,
      asin: "",
      show: !this.state.show,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    console.log(this.state);
    return (
      <Card
        onClick={(e) => this.props.changeSelectedBook(this.props.asin)}
        style={{
          width: "18rem",
          borderColor: this.state.selected ? "red" : "transparent",
        }}
      >
        <Card.Img
          variant="top"
          src={this.props.Cardimg}
          onClick={this.toggleCard}
        />
        <Card.Body>
          <Card.Title>{this.props.Cardtitle}</Card.Title>
          <Card.Text>{this.props.Cardtext}</Card.Text>
          <BadgeComp color="bg-danger" price={this.props.Price}></BadgeComp>
          <CommenetArea
            cardTitle={this.props.Cardtitle}
            handleClose={this.handleClose}
            show={this.state.show}
            asin={this.props.asin}
          />
        </Card.Body>
      </Card>
    );
  }
}
