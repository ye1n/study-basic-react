import './App.css';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#Shop">Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Cart">Cart</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className='main-bg'></div>
      {/* public 폴더 안 이미지 사용: {process.env.PUBLIC_URL + '/이미지 경로'} */}
      <Container>
        <Row>
          <Col>
            {/* html안에서 이미지 사용 : 이미지경로 import한 후 작명한걸 사용 */}
            <img src='https://codingapple1.github.io/shop/shoes1.jpg' width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src='https://codingapple1.github.io/shop/shoes2.jpg' width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
          <Col>
            <img src='https://codingapple1.github.io/shop/shoes3.jpg' width="80%"></img>
            <h4>상품명</h4>
            <p>상품설명</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
