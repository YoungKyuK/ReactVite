function add10(num){
    const promise = new Promise( (resolve, reject)=> {
        // 비동기 작업 실행하는 함수
        // executor
        
        setTimeout(() => {
           
            if(typeof num === 'number'){
                resolve(num + 10);
            } else{
                reject("num이 숫자가 아닙니다.")
            }
        }, 2000);
    });
    return promise;
}

add10(0).
    then((result)=> {
    console.log(result);
    return add10(result);
})
    .then((result)=> {
    console.log(result);
    return add10(result)
}).then((result)=> {
    console.log(result);
}).catch((error)=> {
    console.log(error);
});


// const p = add10(0);
// p.then((result)=> {
//     console.log(result);

//     const newP = add10(result);
//     return newP;
// }).then((result)=> {
//     console.log(result);
// });



// then 메서드 
// -> 그 후에
// then과 catch 동시에 쓰는 것을 promise 체이닝이라고 한다.
// promise
// .then ( (value)=> {
//     console.log(value);
// })
// .catch((error)=> {
//     console.log(error);
// })
