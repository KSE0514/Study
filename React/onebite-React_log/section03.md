# 📜 37강: Node.js 소개

![](https://velog.velcdn.com/images/cellnews3/post/0ea7a328-3fb2-4258-916d-cb54ac9759a1/image.png)

Node.js는 웹 브라우저가 아닌 환경에서도 JavaScript를 실행시켜주는 JavaScript의 Run Time(실행 환경)이다. 즉 JS의 구동기 역할이다.

![](https://velog.velcdn.com/images/cellnews3/post/1c0df144-5234-4168-9af0-7fca84ab5d83/image.png)![](https://velog.velcdn.com/images/cellnews3/post/037f02f8-7279-4f0c-8082-b8582875b070/image.png)

### Node.js는 왜 만들어졌을까?

JS는 웹 페이지 안에서 일어나는 단순한 기능만을 개발하기 위해서 만들어진 간단한 스크립트 언어
![](https://velog.velcdn.com/images/cellnews3/post/06d38799-ac47-42a6-9783-e8a89586d797/image.png)Node.js에 의해 JS가 아래와 같이 웹 브라우저 밖에서도 쓸 수 있게 됨
![](https://velog.velcdn.com/images/cellnews3/post/1bd87cc7-bc57-4b35-bffe-514c01d53098/image.png)

---

# 📜 38강: Node.js 설치

node.js 공홈에서 LTS 버전 다운로드
(Current는 최신버전, LTS는 대부분의 유저에게 추천하는 가장 안정적인 버전\_오랜기간 안정적으로 지원됨)
![](https://velog.velcdn.com/images/cellnews3/post/390feb97-4560-43ef-92b6-7c8ada45a10c/image.png)![](https://velog.velcdn.com/images/cellnews3/post/54c0eb0e-6e2e-49c6-b4f6-ff415a8f9afa/image.png)![](https://velog.velcdn.com/images/cellnews3/post/93613644-4666-45ee-8318-06ce2537d42f/image.png)![](https://velog.velcdn.com/images/cellnews3/post/30e7a659-cf31-4772-85d3-bd5b637d89c0/image.png)![](https://velog.velcdn.com/images/cellnews3/post/8ddb3e9b-d210-4a7e-ab4b-8757aeeb25b9/image.png)![](https://velog.velcdn.com/images/cellnews3/post/f213d082-7f3f-481e-9b42-7e31399dc5c0/image.png)![](https://velog.velcdn.com/images/cellnews3/post/f18c2aef-701e-466e-a333-3f9dfe4cd428/image.png)![](https://velog.velcdn.com/images/cellnews3/post/5475930b-941e-44b3-b667-e990833a4582/image.png)

### 잘 설치 되었는지 확인하는 방법

터미널에서 `node -v` 입력 후 엔터
(터미널 열기: Win+ R > "cmd" 입력 > 확인)
![](https://velog.velcdn.com/images/cellnews3/post/bf19967c-a5dc-43e5-9e1c-b6ee04af67f1/image.png)

## NPM 설치 확인하기

터미널에서 `npm -v` 입력 후 엔터![](https://velog.velcdn.com/images/cellnews3/post/f70f3daa-05ed-4e9e-b6fe-77a0ff3c33b0/image.png)node.js의 프로젝트 단위인 패키지를 관리하는 도구
=> 새로운 패키지를 생성한다거나, 외부 라이브러리를 설치/삭제하는 등의 기능을 제공함

---

# 📜 39강: Node.js 사용

프로젝트
![](https://velog.velcdn.com/images/cellnews3/post/623f5aa1-edb6-4807-b2e1-cdf462678548/image.png)Node.js에서는 프로젝트 대신 아래와 같이 패키지라고 부름![](https://velog.velcdn.com/images/cellnews3/post/3025c0fa-59cf-482f-92d0-c83c5675451e/image.png)

## 패키지 만들기

1. 패키지의 루트 폴더 생성
2. 터미널에 `npm init` 입력
   ![](https://velog.velcdn.com/images/cellnews3/post/1d054c10-85ab-4d4f-b830-0959b106acde/image.png)패키지를 생성하기 위한 몇 가지 정보를 물어봄
   > ![](https://velog.velcdn.com/images/cellnews3/post/0bcdaea2-8924-4b3a-b825-667e5df4a999/image.png)
   >
   > - **package name: (section03)**
   >   패키지 이름 입력하기\_기본값 section03
   > - **version: (1.0.0)**
   >   배포할 때나 의미가 있어서 지금은 신경쓸 필요 없음
   > - **description:**
   >   패키지의 간단한 설명 입력(실습용이므로 굳이 적을 필요 없음)
   > - **entry point: (index.js)**
   >   메인으로 실행될 파일이 무엇인지 적기
   >
   > _아래는 모두 엔터 해서 넘기기_
   >
   > - **test command:**
   > - **git repository:**
   > - **keywords:**
   > - **author:**
   > - **license: (ISC)**
   >
   > 패키지 정보가 맞는지 확인![](https://velog.velcdn.com/images/cellnews3/post/0da46763-2c58-4855-9d86-9edd976efe4e/image.png)

### 브라우저가 아닌 Node.js를 이용하여 JS파일 실행시키기![](https://velog.velcdn.com/images/cellnews3/post/d92703e8-edfe-4613-b152-d3fe308ba488/image.png)

터미널에 `node 실행시키고 싶은 파일 이름` 입력 후 엔터
![](https://velog.velcdn.com/images/cellnews3/post/31f56557-3650-413b-8071-16800b7de4bc/image.png)위와 같이 src 폴더 안에 있을 경우 `src/index.js`라고 입력해야 함

### 파일의 경로가 너무 복잡해질 경우![](https://velog.velcdn.com/images/cellnews3/post/b2ab81ac-f3ee-49c8-ab51-1ec0a9af6d57/image.png)

package.json의 scripts라는 기능을 이용해서 매크로화 할 수 있음
=> scripts에 `"start" : "node src/index.js"`를 입력한 후
터미널에서 `npm run 키워드(지금의 경우엔 start)`를 입력 + 엔터 해주면 됨

---

# 📜 40강: Node.js 모듈 시스템

**모듈 시스템(Module System):** 모듈을 다루는 시스템

![](https://velog.velcdn.com/images/cellnews3/post/5048385a-613b-4e24-a4de-81305401171e/image.png)만약 다양한 기능들을 하나의 js파일에 전부 작성하게 되면 코드의 길이가 길어져 버그를 수정해야 한다거나 기능을 개선해야 한다는 이유로 중간에 코드를 수정해야할 때 수정해야할 부분을 찾기 쉽지 않고 효율이 떨어진다.

그렇기 때문에 아래와 같이 기능별로 파일을 나누는 것이 일반적이다.
![](https://velog.velcdn.com/images/cellnews3/post/fc6cd7e0-7a4a-44f7-b3af-874042fe4547/image.png) 이렇게 기능별로 파일을 나누게 되면 특정 기능에 대해 코드 수정을 해야할 경우 해당 파일에 대해서만 수정하면 된다.
![](https://velog.velcdn.com/images/cellnews3/post/2b57cd86-b831-4d1b-9f35-9428cf104a51/image.png)이때 각각의 파일들을 모듈이라고 부르며 user.js를 user 모듈, cart.js를 cart 모듈, payment.js를 payment 모듈이라 부른다.

![](https://velog.velcdn.com/images/cellnews3/post/bf30c7f6-ecb0-424d-a3d3-68656b437c29/image.png)이러한 모듈을 다루는 기능을 제공하는 시스템을 **모듈 시스템**이라 한다.

![](https://velog.velcdn.com/images/cellnews3/post/1a40d6d7-73b2-4a66-9ebe-9c863bd570ea/image.png)

## <math.js 모듈을 index.js에 불러와 사용하기>

![](https://velog.velcdn.com/images/cellnews3/post/ff2519f5-eb86-493e-b5ed-c80aecfd96d6/image.png)

### 1. CJS(Common JS 모듈 시스템)방식

module이라는 내장 객체에 exports의 property의 값으로 객체를 저장해주기. ({}안에 각각 property로 내보내고 싶은 값들을 적어주면 됨)
![](https://velog.velcdn.com/images/cellnews3/post/acc5edbe-d3d7-4a1a-ad2b-d061ddb87b5a/image.png)**main.js**

```js
// main.js
// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

// module.exports = {
//   add: add, // add라는 property의 값으로 내보낼 값 add 함수
//   sub: sub, // sub라는 property의 값으로 내보낼 값 sub 함수
// }

// value값으로 사용되는 변수 이름과 키값이 똑같을 경우에는 아래와 같이 써도 됨

module.exports = {
  add,
  sub,
  // 이렇게 하면 common JS에 의해 위의 두 개 값이 math모듈에서 내보내지게 된다.
};
```

**index.js**

```js
// index.js
// 방법1. 변수로 받기
const moduleData = require("./math");
// reauire("./math")이라고 하면 math모듈에서 내보냈던 값들이 객체 형태로 넘어옴
// math모듈에서 내보냈던 것들을 불러와 moduleData라는 변수에 저장

console.log(moduleData); // { add: [Function: add], sub: [Function: sub]}

console.log(moduleData.add(1, 2)); // 3
console.log(moduleData.sub(1, 2)); // -1

// 방법2. 구조분해 할당으로 받기
const { add, sub } = require("./math");

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
```

### 2. ESM(ES 모듈 시스템)

common JS보다 훨씬 최신식으로 동작함.(React에서도 이용됨)

- ES 모듈 시스템을 사용하려면 앞으로 패키지 내에서 ES 모듈 시스템을 사용하겠다는 설정을 해줘야 함
  ![](https://velog.velcdn.com/images/cellnews3/post/08e698c9-f455-43ce-80ed-abbea15d488f/image.png)section03/pacage.json에서 "type": "module" 추가(section03 패키지는 ES 모듈 시스템을 사용하겠다는 뜻)

> 참고) ES 모듈 시스템과 Common JS 모듈 시스템을 함께 사용할 수 없음. 만약 사용하려고 하면 아래와 같은 에러메시지가 출력됨![](https://velog.velcdn.com/images/cellnews3/post/d759f1c0-648b-4e2d-a7b8-7eacdb4012e0/image.png)

![](https://velog.velcdn.com/images/cellnews3/post/7cb49be0-9a0d-4e50-87b0-bd4ad31ac540/image.png)**math.js**

```js
// math.js
// math 모듈
function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

export { add, sub }; // ES 방식은 export를 통해 내보낼 수 있음
// 또는 함수 선언 앞에 export를 붙여 내보내는 방법도 있음
// 예시)
// export function add(a, b){
//  return a + b;
//}
```

**index.js**

```js
// index.js
// 2. ES 방식
import { add, sub } from "./math.js";
// 주의. ES 모듈 방식을 이용할 때는 경로 적을 때 확장자까지 꼭 붙여줘야 함

console.log(add(1, 2)); // 3
console.log(sub(1, 2)); // -1
```

#### default 값으로 내보내는 방법

**math.js**

```js
// math.js
// default 값으로 내보내는 방법(export 다음에 default를 붙이면 됨)
export default function multiply(a, b) {
  return a * b;
}
```

**index.js**

```js
import mul from "./math.js"; // 디폴트로 불러온 값의 이름은 임의로 지정할 수 있다.

console.log(mul(2, 3)); // 6
```

> 참고) 동일한 경로로부터 불러오는 import가 많을 경우

```
import mul, { add, sub } from "./math.js" // 같은 경로로부터 불러오는 import가 많을 경우 이렇게 적어도 됨
```

---

# 📜 41강: Node.js 라이브러리 사용

## 라이브러리?

프로그램을 개발할 때 필요한 다양한 기능들을 미리 만들어 모듈화 해 놓은 것![](https://velog.velcdn.com/images/cellnews3/post/17436d83-1d9b-45bb-be70-7a48fb7977f7/image.png)

### 필요한 라이브러리 검색하기

=> 검색창에 npmjs 검색 후 [npmjs.com](https://www.npmjs.com/)으로 이동

#### <라이브러리 설치 예시>

▼randomcolor라이브러리 설치 후 pakage.json파일 변화![](https://velog.velcdn.com/images/cellnews3/post/ffb730a7-4f32-4478-9f9b-4fcb4dedb11d/image.png)▼파일 변화
node_modules(설치한 라이브러리가 실제로 저장되는 곳)와 package-lock.json(package.json과의 차이: 실제 버전이 정확하게 표기됨)이 추가됨\
![](https://velog.velcdn.com/images/cellnews3/post/c83bb149-1447-4180-a4aa-26f81c867efe/image.png)

![](https://velog.velcdn.com/images/cellnews3/post/c2299ebd-05c2-4b89-80d0-edecd6142bdc/image.png)

```js
import randomColor from "randomcolor"; // 라이브러리를 불러올 경우에는 from 뒤에 경로가 아니라 이름만 적으면 된다.

const color = randomColor();
console.log(color);
```

> #### 참고) node_modules와 package-lock.json이 사라졌다면?
>
> 라이브러리를 실행했을 경우 에러 발생
> => package.json의 "dependencies"에 아래와 같이 randomcolor이 남아있다면 ![](https://velog.velcdn.com/images/cellnews3/post/5efd3068-c3bf-4ac3-b7af-56bad3e5a075/image.png)\
> `npm install` 혹은 `npm i` 를 입력할 경우 "dependencies"를 기준으로 모든 패키지와 라이브러리를 다시 설치해줌(사진과 같은 경우엔 randomcolor라이브러리가 다시 설치됨)
