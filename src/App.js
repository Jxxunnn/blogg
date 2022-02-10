/*eslint-disable*/

import React, { useState, useContext } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";
import Cart from "./Cart.js";

export let 재고context = React.createContext();

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  return (
    <div className="App">
      <NavBoot></NavBoot>
      <Switch>
        <Route path="/detail/:id">
          <재고context.Provider value={재고}>
            <Detail shoes={shoes} 재고={재고}></Detail>
          </재고context.Provider>
        </Route>
        <Route path="/cart">
          <Cart></Cart>
        </Route>
        <Route path="/">
          <Jumbotron></Jumbotron>
          <div className="container">
            <재고context.Provider value={재고}>
              <div className="row">
                {shoes.map((a, i) => {
                  return <Card shoes={shoes[i]} i={i} key={i}></Card>;
                })}
              </div>
            </재고context.Provider>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  shoes변경([...shoes, ...result.data]);
                })
                .catch(() => {
                  console.log("실패했어요");
                });
            }}
          >
            더보기
          </button>
        </Route>

        <Route path="/:id">
          <div>새로 만든 route입니다</div>
        </Route>
      </Switch>
    </div>
  );
}

function Card(props) {
  let 재고 = useContext(재고context);

  return (
    <div className="col-md-4" className="card">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
      {재고}
      <Test></Test>
    </div>
  );
}

function Test() {
  let 재고 = useContext(재고context);
  return <p>{재고}</p>;
}

function Jumbotron() {
  return (
    <div className="jumbotron">
      <h1>20% Season Off</h1>
      <p>
        Reference site about Lorem Ipsum, giving information on its origins, as
        well as a random Lipsum generator.
      </p>
      <a>Learn more</a>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.글제목[props.몇번째모달]}</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function NavBoot() {
  return (
    <Navbar bg="light" expand="lg">
      <Container className="navboot">
        <Navbar.Brand href="#home" className="navboot__title">
          개발 blog
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" href="#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Detail" href="#link">
              Detail
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default App;
