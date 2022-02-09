import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";

function Detail(props) {
  let history = useHistory();
  let { id } = useParams();
  let 찾은상품 = props.shoes.find((상품) => 상품.id == id);
  return (
    <div className="container">
      <div>
        <div className="my-alert">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      </div>
      <div>
        <div className="my-alert2">
          <p>재고가 얼마 남지 않았습니다</p>
        </div>
      </div>
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
          <button className="btn btn-danger">주문하기</button>
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
    </div>
  );
}

export default Detail;