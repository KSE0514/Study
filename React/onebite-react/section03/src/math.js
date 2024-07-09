// math 모듈
function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

export { add, sub }; // ES 방식은 export를 통해 내보낼 수 있음
// 또는 함수 선언 앞에 export를 붙여 내보내는 방법도 있음
// 예시)
// export function add(a, b){
//  return a + b;
//}

// default 값으로 내보내는 방법(export 다음에 default를 붙이면 됨)
export default function multiply(a, b){
  return a * b;
}

// 1. Common JS 방식
// module.exports = {
//   add: add, // add라는 property의 값으로 내보낼 값 add 함수
//   sub: sub, // sub라는 property의 값으로 내보낼 값 sub 함수
// }

// value값으로 사용되는 변수 이름과 키값이 똑같을 경우에는 아래와 같이 써도 됨

// module.exports = {
//   add,
//   sub
//   // 이렇게 하면 common JS에 의해 위의 두 개 값이 math모듈에서 내보내지게 된다.
// }
