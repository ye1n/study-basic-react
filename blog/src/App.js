/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [logo, setLogo] = useState("ReactBlog");

  // 변수대신 state를 이용한 데이터 저장
  let [글제목, 글제목변경] = useState([
    "남자코트 추천",
    "강남 우동맛집",
    "파이썬독학",
  ]);

  // let [a, c] = [1, 2];
  // let a = num[0];
  // let c = num[1];

  // state 변경하는 법 : 두번째 이름 사용
  let [따봉, 따봉변경] = useState(0);

  // [동적인 UI 만드는 step]
  // 1. html, css로 미리 디자인 완성
  // 2. UI의 현재 상태를 state로 저장
  // 3. state에 따라 UI가 어떻게 보일지 작성 (조건문 등으로)
  let [modal, setModal] = useState(false);

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
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            // onClick 안에는 함수만
            onClick={() => {
              따봉변경(따봉++);
            }}
          >
            👍
          </span>
          {따봉}
        </h4>
        <button
          onClick={() => {
            // 리액트에서 array/object state를 수정하고 싶으면
            // 독립적인 카피본을 만들어서 수정 [...]
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글제목변경(copy);

            // state변경함수 특징
            // 기존state == 신규state의 경우 변경 안해줌
          }}
        >
          제목 변경
        </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[1]}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal /> : null
      }
    </div>
  );
}

// 컴포넌트 만드는 법
// 1. function 만들고
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
