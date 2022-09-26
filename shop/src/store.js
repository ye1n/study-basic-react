// state들을 보관하는 파일
import { configureStore, createSlice } from '@reduxjs/toolkit'

// redux state 보관하는 법
// 1. createSlice()로 state 만들기 ({ name : 'state이름', initialState : 'state값' })
// 2. configureStore() 안에 등록 ({ 작명 : createSlice만든거.reducer })

// useState() 역할
let user = createSlice({
  name : 'user',  // state 명
  initialState : 'kim', // 값
  reducers : {
    // redux state 변경하는 법
    // 1. state 수정해주는 함수만들기 (파라미터는 기존 state, return에 새로운 state 입력하면 기존 state를 갈아치움)
    // 2. 만든 함수 export, import 후 dispatcher로 감싸서 사용
    changeName(state) {
      return 'john ' + state
    }
  }
})

// user.actions : state 변경 함수가 전부 출력됨
export let {changeName} = user.actions;

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