// eslint-disable
import './App.css';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';
import Detail from './routes/Detail.js';
import { Route, Routes, Link, useNavigate, Outlet } from 'react-router-dom';
{/* public 폴더 안 이미지 사용: {process.env.PUBLIC_URL + '/이미지 경로'} */ }

function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();  // 1. 페이지 이동을 도와주는 useNavigate();

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
            <Nav.Link onClick={() => { navigate('/detail') }}>Cart</Nav.Link>
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
          </div>
        } />
        <Route path="/detail" element={<Detail />} />

        {/* 3. Nested Routes */}
        <Route path="/about" element={<About />} >
          <Route path="member" element={<div>멤버</div>} />
          <Route path="location" element={<div>주소</div>} />
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
