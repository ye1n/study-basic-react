import logo from "./logo.svg";
import "./App.css";

function App() {
  let post = "강남 우동 맛집";

  return (
    <div className="App">
      {/*
      JSX 문법1. class 넣을 땐 className
      JSX 문법2. 데이터 바인딩은 {중괄호}
      JSX 문법3. style 넣을땐 style={{스타일명:'값'}}
      */}
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
