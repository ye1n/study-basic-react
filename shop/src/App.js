/* eslint-disable */
import './App.css';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import { createContext, useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios';
import Cart from './routes/Cart.js';

{/* public 폴더 안 이미지 사용: {process.env.PUBLIC_URL + '/이미지 경로'} */ }

// context API
// 셋팅1. createContext()
// 셋팅2. <Context>로 원하는 컴포넌트 감싸기
// 셋팅3. value={{공유를 원하는 state 적기}}

export let Context1 = createContext();

function App() {
  
  let [shoes, setShoes] = useState(data);
  let navigate = useNavigate();  // 1. 페이지 이동을 도와주는 useNavigate();
  
  // 응용문제 1 : 버튼 2회 누르면 7,8,9번 상품 서버에서 불러오기 구현
  let [clickCount, setClickCount] = useState(1);
  
  // 응용문제 3 : 버튼 누르면 ajax 요청이 성공/실패 하기 전까지 로딩중 메시지 띄우기
  let [loading, setLoading] = useState(false);

  let [stock] = useState([10, 11, 12])

  return (
    <div className="App">

      {/* <Link to="/">홈</Link>
      <Link to="/detail">상세페이지</Link> */}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">ShoeShop</Navbar.Brand>
          <Nav className="me-auto">
            {/* 페이지 앞, 뒤로가기 : navigate(1), navigate(-1)  */}
            <Nav.Link onClick={() => { navigate('/home') }}>Home</Nav.Link>
            <Nav.Link onClick={() => { navigate('/cart') }}>Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      {/* 라우터로 페이지 나누는 법
      1. 상단에 컴포넌트 import
      2. <Routes> 안에 <Route>
      3. <Route path="/url경로" element={<보여줄html> } /> 작성 */}

      <Routes>
        <Route path="/" element={
          <div>
            <div className='main-bg'></div>
            <Container>
              <Row>
                {
                  shoes.map(function (a, i) {
                    return (
                      <Card shoes={shoes[i]} key={i} i={i} />
                    );
                  })
                }
              </Row>
            </Container>
            <button onClick={()=>{
              // ajax 사용하면 새로고침 없이도 Get/Post 요청 가능
              // ajax 쓰려면 옵션 3개 중 택1
              // 1. XMLHttpRequest
              // 2. fetch()
              // 3. axios 등 외부라이브러리
              setClickCount(clickCount+=1);
              setLoading(true);

              // 응용문제 2 : 버튼 3회 누르면 더이상 상품이 없다고 알려주기
              if (clickCount <= 3) {
                // axios({
                //   method : 'GET',
                //   timeout : 100,
                //   url : 'https://codingapple1.github.io/shop/data'+clickCount+'.json',
                // }).then((result)=>{
                //   setLoading(false);
                //   let copy = [...shoes, ...result.data];
                //   setShoes(copy);
                // }).catch(()=>{
                //   // ajax 요청 실패했을 경우 예외 처리
                //   setLoading(false);
                //   console.log('ajax 데이터 요청 실패');
                // })
                
                axios.get('https://codingapple1.github.io/shop/data'+clickCount+'.json', {timeout : 5000}).then((result)=>{
                  setLoading(false);
                  let copy = [...shoes, ...result.data];
                  setShoes(copy);
                })
                // ajax 요청 실패했을 경우 예외 처리
                .catch(()=>{
                  setLoading(false);
                  console.log('ajax 데이터 요청 실패');
                })

                // post 요청
                // axios.post('/응답할경로', {'data':'응답할데이터'})

                // 동시에 여러 ajax 요청
                // Promise.all( [axios.get('URL1'), axios.get('URL2')] );

              }else {
                setLoading(false);
                alert('더이상 불러올 상품이 존재하지 않습니다.');
              }
            }}>버튼</button>
            {
              loading == true ? <p>로딩중 . . .</p> : null
            }
          </div>
        } />

        {/* :id -> 주소창에 /detail/아무거나 입력했을 때 */}
        <Route path="/detail/:id" element={
          <Context1.Provider value={{stock}}>
            <Detail shoes={shoes} />
          </Context1.Provider>
        } />

        <Route path="/cart" element={ <Cart/> } /> 

        {/* 3. Nested Routes */}
        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>주소</div>} />
        </Route>

        <Route path="/event" element={<div><h4>오늘의 이벤트</h4><Outlet /></div>} >
          <Route path="one" element={<p>첫 주문시 양배추즙 서비스</p>} />
          <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
        </Route>

        {/* * : path 지정해준 경로 외에 보여줄 페이지 */}
        < Route path="*" element={<div>404 올바르지 않은 접근입니다.</div>}></Route>
      </Routes>
    </div>
  );
}

function Card(props) {
  return (
    <Col>
      {/* html안에서 이미지 사용 : 이미지경로 import한 후 작명한걸 사용 */}
      <img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg'} width="80%"></img>
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </Col >
  )
}

function About() {
  return (
    <div>
      <h4>회사정보</h4>
      {/* nested routes의 elememt 보여주는 곳은 <Outlet> */}
      <Outlet></Outlet>
    </div>
  );
}

export default App;
