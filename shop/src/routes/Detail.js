import { useParams } from "react-router-dom";

function Detail(props) {

    let { id } = useParams();   // 현재 /:url파라미터 자리에 유저가 입력한 값을 가져온다.

    // let 찾은상품 = props.shoes.find(function (x) {
    //     return x.id == id
    // });
    let 찾은상품 = props.shoes.find((x) => x.id == id);

    return (
        <div className="container">
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