import multiply, { add, sub } from "./math.js";

import randomColor from "randomcolor";

//package.json의 dependencies에 추가 되있으면 삭제를 해도 npm i를 하면 삭제된 라이브러리 바로 재설치 가능
const color = randomColor();
console.log(color);

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(multiply(5, 5));
