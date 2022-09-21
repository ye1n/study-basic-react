/* eslint-disable */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components';

// build 후 css 파일 오염 방지하려면 컴포넌트.module.css

// styled-components 참고 1 : css에 간단한 프로그래밍 가능
let YellowBtn = styled.button`
    background : ${props => props.bg };
    color : ${props => props.bg == 'blue' ? 'white' : 'black'};
    padding : 10px;
`

// styled-components 참고 2 : css 복사 후 변수 저장해서 사용 가능 (복사한 css에 스타일 추가 가능)
// let NewBtn = styled.button(YellowBtn)`
//     padding : 20px;
// `

// 컴포넌트의 Lifecycle : 예전 방식
// 페이지에 장착(mount), 업데이트(update), 필요없다면 제거(unmout)

// class Detail2 extends React.Component {
//     componentDidMount(){

//     }
//     componentDidUpdate(){

//     }
//     componentWillUnmount(){

//     }
// }

function Detail(props) {

    let { id } = useParams();   // 현재 /:url파라미터 자리에 유저가 입력한 값을 가져온다.

    // 같은 문법 두가지
    // let 찾은상품 = props.shoes.find(function (x) { return x.id == id });
    let 찾은상품 = props.shoes.find((x) => x.id == id);

    let [alertB, setAlertB] = useState(true);
    let [num, setNum] = useState('');

    // 컴포넌트의 useEffect : 요즘 방식
    // useEffect 안에 있는 코드는 html 렌더링 후에 동작 (어려운 연산, 서버에서 데이터 가져오는 작업, 타이머 사용 코드)
    useEffect(()=>{
        // mount, update 시 실행 됨
        let timer = setTimeout(()=>{setAlertB(false)}, 2000);

        if(isNaN(num) == true) {
            alert('숫자를 입력해주세요.');
        }
        // clean up function : useEffect 안에 코드 실행하기 전에 동작할 코드 작성, mount시 실행 안됨, unmount시 1회 실행 됨
        return ()=> {
            clearTimeout(timer);
        }
    }, [num])  // []에 있는 변수나 state 가 변할 때만 useEffect 안의 코드를 실행, 비어있다면 mount시 1회 실행

    return (
        <div className="container">

            {/* <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn> */}

            {
                alertB == true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null
            }

            {/* 오늘의 숙제 : 유저가 input에 숫자말고 다른걸 입력하면 alert창 띄우기 */}
            <input onChange={(e)=>{setNum(e.target.value)}} />

            <div className="row">
                <div className="col-md-6">
                    <img src={"https://codingapple1.github.io/shop/shoes" + (찾은상품.id + 1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <p>{찾은상품.content}</p>
                    <p>{찾은상품.price}원</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )
}

export default Detail;