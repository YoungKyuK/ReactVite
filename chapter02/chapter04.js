// 1. Spread 연산자
// -> Spread : 흩뿌리다, 펼치다 라는 뜻
// -> 객체나 배열에 저장된 여러개의 값을 개별로 흩뿌려주는 역할

let arr1 = [1,2,3];
let arr2 = [4, ...arr1, 5,6];

let obj1 = {
    a: 1, 
    b: 2,
};

let obj2 = {
    ...obj1,
    c:3, 
    d:4,
}


function funcA( p1, p2, p3) {
    console.log(p1, p2, p3);
}

funcA(...arr1);

// 2. Rest 매개변수
// -> Rest는 나머지, 나머지 매개변수

function funcB(...rest) {
    console.log(rest);
}

funcB(...arr1);

// 원시타입 
// -> Number, String, Boolean 등등..
// -> 불변값이다. (메모리값 수정 X)

// 객체타입
// -> Object, Array, Function 등등..
// -> 가변값이다. (메모리값 수정 O)


// 새로운 객체를 생성하면서 프로퍼티만 따로 복사해서 안전함
// 원본객체가 수정될 일이 없음
let o1 = { name : "김영규" };
let o2 = {...o1};

o2.name="홍길동";