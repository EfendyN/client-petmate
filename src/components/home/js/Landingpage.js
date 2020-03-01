import React, { Component } from "react";

import { connect } from "react-redux";
import { getSpecies } from "../../../_actions/species";

import "../css/landingpage.css";
import { Button, Modal, Image, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../svg/pet.svg";
import rectangle from "../svg/Rectangle.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../images/petMate6.png";

class landingpage extends Component {
  constructor(props) {
    super();
    this.state = {
      modalLogin: false,
      regModal: false
    };

    // this.openModalLogin = this.openModalLogin.bind(this);
    // this.closeModalLogin = this.closeModalLogin.bind(this);
    // this.openModalReg = this.openModalReg.bind(this);
    // this.closeModalReg = this.closeModalReg.bind(this);
  }

  componentDidMount() {
    this.props.getSpecies();
  }

  openModalLogin = () => {
    this.setState({
      modalLogin: true
    });
  };
  closeModalLogin = () => {
    this.setState({
      modalLogin: false
    });
  };
  openModalReg = () => {
    this.setState({
      regModal: true
    });
  };
  closeModalReg = () => {
    this.setState({
      regModal: false
    });
  };

  render() {
    const { data, loading, error } = this.props.species;
    if (error) return <h1>There's an unknown error occured.</h1>;
    return (
      <div>
        <section>
          <header>
            <div>
              <ul>
                <Image src={logo} className="logo"></Image>
                <button onClick={this.openModalReg} className="buttonReg">
                  Register
                </button>
                <button onClick={this.openModalLogin} className="loginButton">
                  Login
                </button>
                <Modal
                  className="modal-login"
                  size="sm"
                  show={this.state.modalLogin}
                >
                  <Modal.Header>
                    <Modal.Title
                      class="titleModalLogin"
                      id="contained-modal-title-vcenter"
                    >
                      Login
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body className="modalBodyLogin">
                    <Form>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email" />
                      </Form.Group>
                      <Form.Group controlId="formBasicPassword">
                        <Form.Control
                          type="password"
                          placeholder="Enter Password"
                        />
                      </Form.Group>
                    </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Link to="/IndexUser">
                      <Button variant="dark" onClick={this.closeModalLogin}>
                        Login
                      </Button>
                    </Link>
                  </Modal.Footer>
                </Modal>
              </ul>
            </div>
          </header>
        </section>
        <section id="main">
          <div className="main-text-title">
            Swipe <b>right.</b> <br />
            Make your pet <b>happy </b>
          </div>
          <div className="main-text-child">
            by clicking enter, you agree to <u>our terms.</u> Learn how we
            procces you data
            <br />
            in our <u>Privacy Policy</u> and <u>Cookie Policy.</u>
          </div>
          <div className="main-text-child2">Find your Pet's Match</div>
          <Modal
            className="modal-register"
            size="sm"
            show={this.state.regModal}
          >
            <Modal.Header>
              <Modal.Title
                class="titleModalRegister"
                id="contained-modal-title-vcenter"
              >
                Register
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group>
                  <Form.Control type="text" placeholder="Breeder" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="email" placeholder="Email" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="number" placeholder="Phone Breeder" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="textarea" placeholder="Address Breeder" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Name Pet" />
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Gender" />
                </Form.Group>
                <Form.Group>
                  <select className="select-spesies">
                    <option selected disabled>
                      spesies pet
                    </option>
                    {data.map((item, index) => (
                      <option className="option-spesies" key={index}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </Form.Group>
                <Form.Group>
                  <Form.Control type="text" placeholder="Age Pet" />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button
                id="btn-footer"
                variant="dark"
                onClick={this.closeModalReg}
              >
                Register
              </Button>
            </Modal.Footer>
          </Modal>
        </section>
        <Image src={image} className="image"></Image>
        <Image src={rectangle} className="rectangle"></Image>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    species: state.species
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSpecies: () => dispatch(getSpecies())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(landingpage);
