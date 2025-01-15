// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// ES 모듈시스템(package.json에 type:module 추가)
export { add, sub };

export default function multiply(a, b) {
  return a * b;
}

// Common JS 모듈 시스템
// module.exports = {
//   add,
//   sub,
// };
