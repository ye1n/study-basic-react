/* eslint-disable */

import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

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
  let [따봉, 따봉변경] = useState([0, 0, 0]);

  // [동적인 UI 만드는 step]
  // 1. html, css로 미리 디자인 완성
  // 2. UI의 현재 상태를 state로 저장
  // 3. state에 따라 UI가 어떻게 보일지 작성 (조건문 등으로)
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  let [day, setDay] = useState(['2월 18일', '2월 18일', '2월 18일'])

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
      {/* <div className="list">
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
      </div> */}

      {/* map() 사용법 
      1. array 자료 갯수만큼 내부코드 실행
      2. return 오른쪽에 있는걸 array로 담아줌
      3. 유용한 파라미터 2개 사용가능 */}

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4 onClick={() => {setModal(!modal);setTitle(i)}}>{글제목[i]}
              <span onClick={() => {
                  let copy = [...따봉];
                  copy[i]++;
                  따봉변경(copy);
                }}> 👍</span>{따봉[i]}</h4>
            <p>{day[i]} 발행</p>
            <button onClick={() => {
              let copy = [...글제목]
              copy.splice(i, 1)
              글제목변경(copy)
            }}>삭제</button><br /><br />
          </div>
        );
      })}

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }} />

      <button onClick={() => {
        // 응용 문제 1. 공백입력후 추가 버튼 클릭 막기
        if (입력값.trim() != "") {
          let copy = [...글제목]
          copy.push(입력값)
          글제목변경(copy)
  
          // 응용 문제 2. 글이 추가되면 좋아요 기록도 추가
          let like = [...따봉]
          like.push('0')
          따봉변경(like)

          // 응용 문제 3. 글 추가한 날짜도 함께 저장
          let today = new Date();
          let todayToString = (today.getMonth() + 1) + "월 " + today.getDate() + "일";
          let nowDay = [...day]
          nowDay.push(todayToString)
          setDay(nowDay)

        } else {
          alert("제목을 입력해주세요.")
        }
      }}>추가</button>

      {
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드

        // 부모 -> 자식 state 전송하는법
        // 1. <자식컴포넌트 작명={state이름}>
        // 2. props 파라미터 등록 후 props.작명 사용
        modal == true ? <Modal 글제목변경={글제목변경} 글제목={글제목} title={title} /> : null
      }

      {/* <Modal2/> */}
    </div>
  );
}

// 컴포넌트 만드는 법
// 1. function 만들고
// 2. return() 안에 html 담기
// 3. <함수명></함수명> 쓰기

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => {
        // props.글제목변경(["여자코트 추천", "강남 우동맛집", "파이썬독학"])
        let copy = [...props.글제목];
        copy[0] = "여자코트 추천";
        props.글제목변경(copy);
      }}>글수정</button>
    </div>
  );
}

// 예전 리액트의 class 문법 (참고용)
class Modal2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div>안녕 {this.state.age}
        <button onClick={() => {
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}

export default App;
