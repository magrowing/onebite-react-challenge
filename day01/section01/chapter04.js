// 1. 변수 let (중복선언불가능, 재할당은 가능)
// 변수를 선언, 초기화 한다. 
let age; 
console.log(age); // undefined

age = 30;
console.log(age);

// 2. 상수 const 선언과 동시에 초기화를 해주어야 한다.
// (중복선언 불가능, 재할당 불가능) 
const birth = '1997.01.07';

// 3. 변수 명명규칙(네이밍 규칙)

// 3-1. $,_ 제외한 기호는 사용할 수 없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다. 
let name1;

// 3-3. 예약어를 사용할 수 없다. 

// 4. 변수 명명 가이드 (변수의 의도가 들어날 수 있도록 변수명을 지어야 한다.)
let a = 1; 
let b = 1; 
let c = a - b;

let salesCount = 1; 
let refundCount = 1; 
let totalSalesCount = salesCount - refundCount;


