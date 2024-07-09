// 1. Common JS 방식
// // 방법1. 변수로 받기
// const moduleData = require("./math");
// // reauire("./math")이라고 하면 math모듈에서 내보냈던 값들이 객체 형태로 넘어옴
// // math모듈에서 내보냈던 것들을 불러와 moduleData라는 변수에 저장

// console.log(moduleData); // { add: [Function: add], sub: [Function: sub]}

// console.log(moduleData.add(1, 2)); // 3
// console.log(moduleData.sub(1, 2)); // -1

// // 방법2. 구조분해 할당으로 받기
// const {add, sub} = require("./math");

// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1

// 2. ES 방식
// import { add, sub } from "./math.js"; 
//   // 주의. ES 모듈 방식을 이용할 때는 경로 적을 때 확장자까지 꼭 붙여줘야 함



// console.log(add(1, 2)); // 3
// console.log(sub(1, 2)); // -1

// import mul from "./math.js"; // 디폴트로 불러온 값의 이름은 임의로 지정할 수 있다.

// console.log(mul(2, 3)); // 6

// // 참고
// import mul, { add, sub } from "./math.js" // 같은 경로로부터 불러오는 import가 많을 경우 이렇게 적어도 됨

import randomColor from "randomcolor"; // 라이브러리를 불러올 경우에는 from 뒤에 경로가 아니라 이름만 적으면 된다.

const color = randomColor();
console.log(color);