// 1. 콜백 함수(Callback Function)란?
// -> 자신이 아닌 다른 함수에, 인수로써 전달된 함수를 의미 함.

// 매개변수 value안에 sub함수 넣음
// function main(value) {
//   value();
// }

// function sub() {
//   console.log("sub");
// }

// 콜백함수 : 인자를 함수로 씀
// main(sub);

function main(value) {
  //console.log(1);
  //console.log(2);
  value();
  //console.log("end");
}

// function sub() {
//   console.log("i am sub");
// }

main(() => {
  //console.log("i am sub");
});

// 2. 콜백함수의 활용
function repeat(count, callback) {
  for (let idx = 1; idx <= count; idx++) {
    callback(idx);
  }
}

repeat(5, function (idx) {
  console.log(idx);
});

repeat(5, (idx) => {
  console.log(idx * 2);
});
