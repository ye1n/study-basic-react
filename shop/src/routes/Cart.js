/* eslint-disable */
import {Table} from 'react-bootstrap'
import { useSelector } from 'react-redux'

function Cart(){

    let cartList = useSelector((state)=>{return state.cartList})
    console.log(cartList)

    return(
        <div>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                {
                  cartList.map(function (a, i) {
                    return (
                    //   <Card shoes={shoes[i]} key={i} i={i} />
                      <tr key={i}>
                        <td>{cartList[i].id}</td>
                        <td>{cartList[i].name}</td>
                        <td>{cartList[i].count}</td>
                        <td><button>변경하기</button></td>
                      </tr>
                    );
                  })
                }
                </tbody>
            </Table>
        </div>
    )
}

export default Cart