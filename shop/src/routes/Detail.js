/* eslint-disable */
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

function Detail(props) {

    let { id } = useParams();   // 현재 /:url파라미터 자리에 유저가 입력한 값을 가져온다.

    // 같은 문법 두가지
    // let 찾은상품 = props.shoes.find(function (x) {
    //     return x.id == id
    // });
    let 찾은상품 = props.shoes.find((x) => x.id == id);

    return (
        <div className="container">

            {/* <YellowBtn bg="blue">버튼</YellowBtn>
            <YellowBtn bg="orange">버튼</YellowBtn> */}

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