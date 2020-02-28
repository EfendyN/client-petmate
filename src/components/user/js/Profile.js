import React, { Component } from "react";
import { Link } from "react-router-dom";
// import SliderDistance from "./slider";

import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";

import { Image, Col, Card, Row, Dropdown } from "react-bootstrap";
import Garry from "../images/garry1.jpeg";
import arrowback from "../svg/arrowback.svg";
import "../css/profile.css";
class userIndex extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0
    };
  }
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Header>
                  <Row>
                    <Col className="col-arrow-back">
                      <Link to="/IndexUser">
                        <Image className="arrow-back" src={arrowback} />
                      </Link>
                    </Col>
                    <Col className="col-img-profile">
                      <Image
                        roundedCircle
                        className="img-profile"
                        src={Garry}
                      />
                    </Col>
                    <Col className="col-name-profile">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Garry
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-2">
                            <Link>Setting</Link>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            <Link to="/">Logout</Link>
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body className="bodyProfile">
                  <Card.Title className="titleProfile">
                    <h5>Account Setting</h5>
                  </Card.Title>
                  <Row className="rowProfile1">
                    <Col>Email</Col>
                    <Col>nicoefendy22@gmail.com</Col>
                  </Row>
                  <Row className="rowProfile2">
                    <Col>Phone</Col>
                    <Col>08788235590</Col>
                  </Row>
                  <Card.Title className="titleProfile">
                    <h5>Discovery Setting</h5>
                  </Card.Title>
                  <Row className="rowProfile3">
                    <Col>Maximum Distance</Col>
                    <Col>{this.state.value} km</Col>
                  </Row>
                  <Row className="rowProfile4">
                    <RangeSlider
                      tooltip="off"
                      value={this.state.value}
                      onChange={changeEvent =>
                        this.setState({ value: changeEvent.target.value })
                      }
                    />
                  </Row>
                  <Row className="rowProfile5">
                    <Col>Age</Col>
                  </Row>
                  <Row className="rowProfile2-1"></Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8} sm={12} xs={12} className="col2Profile">
              <Card style={{ width: "18rem" }} className="cardProfileCol2">
                <Card.Img className="imgCardCol2" variant="top" src={Garry} />
                <Card.Body className="cardBodyCol2">
                  <Row className="row1Title">
                    <Col className="col1Title">
                      <Card.Title className="titleCol2-1">Garry</Card.Title>
                    </Col>
                    <Col className="col2Title">
                      <Card.Title className="titleCol2-2">Siput</Card.Title>
                    </Col>
                  </Row>
                  {/* <Row><Image src={breeder}></Image>Breeder : Nico Efendy</Row>
                  <Row><Image src={distance}></Image>10 Kilometer dari sini</Row>
                  <Row><Image src={age}></Image>Male - Adult</Row>
                  <Row><Image src={phone}></Image>Phone Breeder : 087887235590</Row> */}
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default userIndex;
