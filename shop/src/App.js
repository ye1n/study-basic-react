import './App.css';
import { Row, Col, Container, Navbar, Nav } from 'react-bootstrap';
import { useState } from 'react';
import data from './data.js';

function App() {

  let [shoes] = useState(data);

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

export default App;
