import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// 리렌더링 : 초기값 state의 상태가 setstate 변화되서 화면에 다시 나타낼 때 쓰임

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
