// state들을 보관하는 파일
import { configureStore, createSlice } from '@reduxjs/toolkit'

// useState 역할
let user = createSlice({
  name : 'user',  // state 명
  initialState : 'kim' // 값
})

let stock = createSlice({
  name : 'stock',
  initialState : [10, 11, 12]
})

let cartList = createSlice({
  name : 'cartList',
  initialState : [
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ]
})

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cartList : cartList.reducer,
  }
}) 