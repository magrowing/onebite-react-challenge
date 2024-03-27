// 1. 콜백함수

function main(value){
  //console.log(value);
  value();
  console.log('end');
}

function sub(){
  console.log('I am sub');
}

main(sub); // 👈🏻 sub : 콜백함수 

main(() => {
  console.log('화살표 함수 가능');
})

main(function(){
  console.log('함수 표현식도 가능')
})

// 2. 콜백함수의 활용
// 중복코드를 간결하게 사용 할 수 있다. 

function repeat(count){
  for(let idx=1; idx<=count; idx++){
    console.log(`repeat : ${idx}`);
  }
}


function repeatCallBack(count, callback){
  for(let idx=1; idx<=count; idx++){
    callback(idx);
  }
}

repeat(5);

repeatCallBack(5, function(idx){
  console.log(`repeatCallBack : ${idx}`);
})

repeatCallBack(5, (idx) => {
  console.log(`repeatCallBack : ${idx * 2}`);
})