import React, { Component } from "react";
import "../css/landingpage.css";
import {
  Button,
  Modal,
  Image,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
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

    this.openModalLogin = this.openModalLogin.bind(this);
    this.closeModalLogin = this.closeModalLogin.bind(this);

    this.openModalReg = this.openModalReg.bind(this);
    this.closeModalReg = this.closeModalReg.bind(this);
  }

  openModalLogin() {
    this.setState({
      modalLogin: true
    });
  }
  closeModalLogin() {
    this.setState({
      modalLogin: false
    });
  }
  openModalReg() {
    this.setState({
      regModal: true
    });
  }
  closeModalReg() {
    this.setState({
      regModal: false
    });
  }

  render() {
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
                <Modal size="sm" show={this.state.modalLogin}>
                  <Modal.Header>
                    <Modal.Title
                      class="modalLogin"
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
          <Modal size="sm" show={this.state.regModal}>
            <Modal.Header>
              <Modal.Title
                class="modalRegister"
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
                  <DropdownButton
                    as={InputGroup.Append}
                    variant="outline-secondary"
                    title="Spesies"
                    id="input-group-dropdown-2"
                    className="btnSpesies"
                  >
                    <Dropdown.Item href="#">Action</Dropdown.Item>
                    <Dropdown.Item href="#">Another action</Dropdown.Item>
                    <Dropdown.Item href="#">Something else here</Dropdown.Item>
                    <Dropdown.Item href="#">Separated link</Dropdown.Item>
                  </DropdownButton>
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

export default landingpage;
