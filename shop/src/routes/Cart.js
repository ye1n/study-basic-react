/* eslint-disable */
import {Table, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { countUp } from '../store/store.js';
import {changeAge, changeName} from './../store/userSlice.js'

function Cart(){

    let state = useSelector((state)=>state); //store에 있던 모든 state가 그 자리에 남음
    let dispatch = useDispatch()

    return(
        <div>
          {state.user.name}{state.user.age}의 장바구니
          <button onClick={()=>{dispatch(changeAge(10))}}>나이증가</button>
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
                  state.cartList.map(function (a, i) {
                    return (
                    //   <Card shoes={shoes[i]} key={i} i={i} />
                      <tr key={i}>
                        <td>{state.cartList[i].id}</td>
                        <td>{state.cartList[i].title}</td>
                        <td>{state.cartList[i].count}</td>
                        <td><Button variant="secondary" onClick={()=>{
                          dispatch(countUp(state.cartList[i].id))
                        }}>+</Button></td>
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