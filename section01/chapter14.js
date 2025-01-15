//1. Scope란? 변수나 함수에 접근하거나 호출 할 수 있는 범위를 말함
// -> 전역(전체 영역)스코프, 지역 스코프

let a = 1; // 전역 스코프

function funcA() {
  let b = 2;
  console.log(a);

  function funcB() {}
}
funcA();

if (true) {
  let c = 1;
}
// console.log(c);

for (let i = 0; i < 10; i++) {
  let d = 1;
}
// console.log(d);

funcB();
