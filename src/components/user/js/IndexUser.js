import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Image, Col, Card, Row, Dropdown } from "react-bootstrap";
import Garry from "../images/garry1.jpeg";
import reload from "../svg/proccess.svg";
import nolike from "../svg/x.svg";
import like from "../svg/love.svg";
import premium from "../svg/lightning.svg";
import "../css/userIndex.css";
import Deck from "../js/Deck.js";
import Data from "../js/datacard.js";

class IndexUser extends Component {
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col md={4}>
              <Card>
                <Card.Header>
                  <Row>
                    <Col className="col-img-profile">
                      <Link to="/Profile">
                        <Image
                          roundedCircle
                          className="img-profile"
                          src={Garry}
                        />
                      </Link>
                    </Col>
                    <Col className="col-name-profile">
                      <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                          Garry
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            <Link to="/Profile">Profile</Link>
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Setting
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Col>
                  </Row>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="titleMatch">Match</Card.Title>
                    </Col>
                  </Row>
                  <Row className="scroll-body-card">
                    {Data.map((postData, index) => {
                      return (
                        <Col xs={12} md={4} ms={4}>
                          <Card.Img
                            src={postData.pics}
                            className="cardimg"
                          ></Card.Img>
                          <Card.Title className="titleImage">
                            {postData.name}
                          </Card.Title>
                          {/* <label className="namee">{postData.name}</label> */}
                        </Col>
                      );
                    })}
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col md={8} sm={12} xs={12} id="swipe">
              <Deck />
              <button className="btn-col2-1">
                <Image className="img-btn" src={reload}></Image>
              </button>
              <button className="btn-col2-2">
                <Image className="img-btn-mid" src={nolike}></Image>
              </button>
              <button className="btn-col2-3">
                <Image className="img-btn-mid" src={like}></Image>
              </button>
              <button className="btn-col2-4">
                <Image className="img-btn" src={premium}></Image>
              </button>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default IndexUser;
