import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";
import { 재고context } from "./App.js";
import { Nav } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => 상품.id == id);
  let [알림창, 알림창변경] = useState(true);
  let [입력값, 입력값변경] = useState("");
  let [누른탭, 누른탭변경] = useState(0);

  let 재고 = useContext(재고context);

  useEffect(() => {
    let timer = setTimeout(() => {
      알림창변경(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      {알림창 == true ? (
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              Number(id) + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{찾은상품.title}</h4>
          <p>{찾은상품.content}</p>
          <p>{찾은상품.price}</p>
          <Info 재고={props.재고}></Info>
          <button
            className="btn btn-danger"
            onClick={() => {
              console.log(1);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.push("/");
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>

      <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link
            eventKey="link-0"
            onClick={() => {
              누른탭변경(0);
            }}
          >
            Option 1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="link-1"
            onClick={() => {
              누른탭변경(1);
            }}
          >
            Option 2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={true} classNames="wow" timeout={500}>
        <TabContent 누른탭={누른탭}></TabContent>
      </CSSTransition>
    </div>
  );
}

function TabContent(props) {
  if (props.누른탭 === 0) {
    return <div>0번째 내용입니다</div>;
  } else if (props.누른탭 === 1) {
    return <div>1번째 내용입니다</div>;
  }
}

function Info(props) {
  return <p>재고 : {props.재고[1]}</p>;
}

export default Detail;
