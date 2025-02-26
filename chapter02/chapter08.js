// 5가지 요소 순회 및 탐색 메서드
// 1. forEach
// 모든 요소를 순회하면서, 각가의 요소에 특정 동작을 수행시키는 메서드

let arr1 = [1,2,3];

arr1.forEach( function (item, idx, arr) {
//    console.log(idx, item * 2);
});

let doubledArr = [];

arr1.forEach( (item)=> {
    doubledArr.push(item * 2);
})
//console.log(doubledArr);

// 2. includes
// 배열의 특정 요소가 있는지 확인하는 메서드
let arr2 = [1,2,3];
let isInclude = arr2.includes(3);




//console.log(isInclude);

// 3. indeOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
let arr3 = [1,2,3];
let index = arr3.indexOf(2);

let objectArr = [
    { name: "홍길동"},
    { name: "김영규"}
];
console.log(
    objectArr.indexOf({name: "김영규"})
);

console.log(
    objectArr.findIndex(
        (item) => item.name === "김영규"
    )
);
// indexOf는 얕은비교라 객체타입은 반환하지 못함
// findIndex는 callback 함수를 이용해서 객체타입도 반환 가능

// 4. findIndex
// 모든 요소를 순회하면서, 콜백함수를 만족하는 메서드
// 특정 요소의 인덱스(위치)를 반환하는 메서드
let arr4 = [1,2,3];
const findedIndex = arr4.findIndex( (item)=> {
    if(item % 2 !== 0) return true;
})

// 5. find
// 모든 요소를 순회하면서 콜백함수를 만족하는 요소를 찾는데, 요소를 그대로 반환
let arr5 = [
    {name : "김영규"},
    {name : "홍길동"}
];

const finded =arr5.find((item) => item.name === "김영규");
console.log(finded);