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
    {id : 0, title : 'White and Black', count : 2},
    {id : 1, title : 'Grey Yordan', count : 1},
  ],
  reducers : {
    // 버튼을 누르면 옆에 있는 상품id와 동일한 상품id 가진걸 state에서 찾은 다음에 그걸 +1
    countUp(state, action) {
      let product = state.find((x) => x.id == action.payload);
      product.count += 1;
    },
    addList(state, action){
      let copy = [...state];
      copy.push(action.payload);
      console.log(copy);
      return copy;
    }
  }
})

export let {countUp, addList} = cartList.actions;

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartList : cartList.reducer,
  }
}) 