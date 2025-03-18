import { useState } from "react";

// 컴포넌트의 리렌더링
// 1. state의 값이 변경되었을 때
// 2. props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링 되면 자식 컴포넌트가 리렌더링이 된다.

const Bulb = () => {
  const [light, setLight] = useState("OFF");
  console.log(light);
  return (
    <div>
      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
      )}

      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄기" : "켜기"}
      </button>
    </div>
  );
};

export default Bulb;
