import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  // 변수대신 state를 이용한 데이터 저장
  let [글제목, b] = useState(["남자코트 추천", "강남 우동맛집", "파이썬독학"]);
  let [logo, setLogo] = useState("ReactBlog");

  // let [a, c] = [1, 2];
  // let a = num[0];
  // let c = num[1];

  return (
    <div className="App">
      {/*
      JSX 문법1. class 넣을 땐 className
      JSX 문법2. 데이터 바인딩은 {중괄호}
      JSX 문법3. style 넣을땐 style={{스타일명:'값'}}
      */}
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
