/*eslint-disable*/

import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import axios from "axios";

import "./App.css";
import Data from "./data.js";
import Detail from "./Detail.js";

function App() {
  /* let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "여자 코트 추천",
  ]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [모달, 모달변경] = useState(false);
  let [몇번째모달, 몇번째모달변경] = useState(0);
  let [입력값, 입력값변경] = useState(""); */
  let [shoes, shoes변경] = useState(Data);
  /* 
  function 따봉추가(i) {
    let array = [...따봉];
    array[i]++;
    따봉변경(array);
  }
 */
  return (
    <div className="App">
      <NavBoot></NavBoot>
      <Switch>
        <Route path="/detail/:id">
          <Detail shoes={shoes}></Detail>
        </Route>

        <Route path="/">
          <Jumbotron></Jumbotron>
          <div className="container">
            <div className="row">
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i}></Card>;
              })}
            </div>
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((result) => {
                  console.log(result.data);
                })
                .catch(() => {
                  console.log(2);
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

      {/*   {글제목.map((a, i) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                모달변경(!모달);
                몇번째모달변경(i);
              }}
            >
              {a}
              <span
                onClick={() => {
                  따봉추가(i);
                }}
              >
                ❤
              </span>
              {따봉[i]}
            </h3>
            <p>2월 17일 발행</p>
            <hr />
          </div>
        );
      })}
      <div className="publish">
        <input
          onChange={(e) => {
            입력값변경(e.target.value);
          }}
        />
        <button
          onClick={() => {
            let array = [...글제목];
            array.push(입력값);
            글제목변경(array);
            let array2 = [...따봉];
            array2.push(0);
            따봉변경(array2);
          }}
        >
          저장
        </button>
      </div>
      {모달 == true ? (
        <Modal 글제목={글제목} 몇번째모달={몇번째모달}></Modal>
      ) : null} */}
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4" className="card">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
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
