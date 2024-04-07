function sum(num){
  const promise = new Promise((resolve,reject) => {
    // 비동기 작업을 실행하는 함수 
    // executor
  
    setTimeout(() => {
      if(typeof num === 'number'){
        resolve(num + 1); 
      }else{
        reject(`${num}이 숫자가 아닙니다.`);
      }
    },2000)
  }); 

  return promise;
}



// promise의 결과값을 사용하기 위해서 
// than 메서드 
// -> 그 후에 

//promise.then((value) => {console.log(value)});

// catch 메서드 
// 실패한 값을 전달 받을 수 있다. 

//promise.catch((error) => {console.log(error)});a


// promise
// .then((value) => {console.log(value)})
// .catch((error) => {console.log(error)});

sum(0).then((num) => {
  console.log(num); 
  return sum(undefined);
}).then((result) => {
  console.log(result);
  return sum(result);
}).then((result) => 
  console.log(result)
).catch((error) => 
  console.log(error)
);