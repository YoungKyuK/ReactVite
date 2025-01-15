// 함수 선언
// function greeting() {
//   console.log("안녕");
// }

// console.log("호출 전");
// greeting();
// console.log("호출 후");

let area1 = getArea(20, 20);
console.log(area1);
let area2 = getArea(30, 20);
console.log(area2);

getArea(20, 50);

// 호이스팅
// -> 끌어올리다 라는 뜻 (선언문은 javascript가 알아서 위로 끌어올려서 실행)
function getArea(width, height) {
  function another() {
    // 중첩 함수
    console.log("another");
  }
  another();
  let area = width * height;

  return area;
}
