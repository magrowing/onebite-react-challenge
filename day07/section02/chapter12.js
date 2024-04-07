function add(x,y, callback){
  setTimeout(() => {
    const sum = x + y  // 👈🏻 sum의 변수를 add 함수 외부에서도  사용하고 싶다면 콜백함수를 이용해서 처리 한다. 
    callback(sum);
  },3000)
}

add(1,2, (value) => {
  console.log(value);
});


// 음식을 주문하는 상황 
function orderFood(callback){
  setTimeout(() => {
    const food = '김밥';
    callback(food);
  }, 3000)
}

function coolDownFood(food, callback){
  setTimeout(() => {
    const coolDownedFood = `식은 ${food}`; 
    callback(coolDownedFood);
  }, 2000)
}

function freezeFood(food, callback){
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 1500)
}

orderFood((food) => {
  console.log(food); // 김밥 

  coolDownFood(food, (coolDownedFood) => {
    console.log(coolDownedFood);  // 식은 김밥 

    freezeFood(coolDownedFood, (freezedFood) => {
      console.log(freezedFood); // 얼린 김밥 
    });
  })
});



