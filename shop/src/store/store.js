// state들을 보관하는 파일
import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './userSlice.js'

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cartList = createSlice({
  name : 'cartList',
  initialState : [
    {id : 0, title : 'White and Black', count : 1},
    {id : 1, title : 'Grey Yordan', count : 1},
    {id : 2, title : 'yellow urban', count : 1},
    {id : 3, title : 'orange heily', count : 1},
  ],
  reducers : {
    // 버튼을 누르면 옆에 있는 상품id와 동일한 상품id 가진걸 state에서 찾은 다음에 그걸 +1
    countUp(state, action) {
      let i = state.findIndex((x) => x.id == action.payload);
      state[i].count ++;
    },
    // 응용2. 주문하기 버튼 누를 때 이미 상품이 state안에 있으면 추가가 아니라 기존 항목 수량 증가만
    // 아직 미해결
    addList(state, action){
      if((state.findIndex()) == -1){
        // 상품이 장바구니에 담기지 않음
        state.push(action.payload);
        console.log('장바구니에 담음')
      }else {
        // 상품이 이미 장바구니에 존재
        console.log('상품이 이미 장바구니에 담겨있음')
      }
    },
    // 응용1. 표의 행마다 삭제버튼 만들고 누르면 상품이 삭제됨
    deleteList(state, action){
      let i = state.findIndex((x) => x.id == action.payload);
      state.splice(i, 1);
    }
  }
})

export let {countUp, addList, deleteList} = cartList.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartList : cartList.reducer,
  }
}) 