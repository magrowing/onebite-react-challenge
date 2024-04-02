// Date 객체를 생성하는 방법 

let date1 = new Date();  // 생성자 
console.log(date1); // 현재기준의 날짜를 확인 할 수 있다. 

let date2 = new Date('2002/12/25/12:00:00');
console.log(date2);


// 2. 타임 스탬프 
// 특정 시간이 1970.01.01 00시00분00초 (UTC)로 부터 몇 ms가 지났는지 의미하는 숫자값 
let ts1 = date1.getTime(); 
console.log(ts1);
let date4 = new Date(ts1);
console.log(date4);


// 3. 시간요소들을 추출하는 방법 

let year = date1.getFullYear();
let month = date1.getMonth() + 1; 
let date = date1.getDate(); 

let hour = date1.getHours(); 
let minute = date1.getMinutes(); 
let seconds = date1.getSeconds(); 

console.log({
  year,
  month,
  date,
  hour,
  minute,
  seconds,
});

// 4. 시간 수정하기 
date1.setFullYear(2023);
date1.setMonth(4);
date1.setDate(30);
date1.setHours(23); 
date1.setMinutes(59); 
date1.setSeconds(59); 

console.log(date1);

// 5. 시간을 여러 포맷으로 출력하기 

// 현재 날짜만 출력 
console.log(date1.toDateString()); // Tue May 30 2023
console.log(date1.toLocaleString());  // 2023. 5. 30. 오후 11:59:59