// 1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// 프로퍼티는 문제되지 않는다. (상수를 바꾸는 건 안됌 .. 주소지가 생성 즉시 할당)
animal.age = 2; // 추가
animal.name = "까망이"; // 수정
delete animal.color; // 삭제

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
  name: "김영규",
  // 메서드 선언 (객체의 동작을 정의한다)
  sayHi() {
    console.log("안녕!");
  },
};

person.sayHi();
person["sayHi"]();
