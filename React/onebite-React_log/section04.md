# 📜 42강 : React.js 소개

## React.js?![](https://velog.velcdn.com/images/cellnews3/post/b3f8164d-89ad-434c-b570-a828a6b1aae2/image.png)

**<특징>**

1. 컴포넌트를 기반으로 UI를 표현한다.
2. 화면 업데이트 구현이 쉽다.
3. 화면 업데이트가 빠르게 처리된다.

### 1. 컴포넌트를 기반으로 UI를 표현한다.

컴포넌트(Component): "구성요소". 화면을 구성하는 요소, UI를 구성하는 요소를 말함![](https://velog.velcdn.com/images/cellnews3/post/386300b4-021e-45bb-87ca-d4487ab70a14/image.png)

컴포넌트를 사용해서 개발하지 않을 경우 아래와 같이 중복된 코드 발생함![](https://velog.velcdn.com/images/cellnews3/post/00071d7b-689a-4be9-b8d0-e76bc1b87024/image.png)컴포넌트로 나눠서 처리하면 코드를 수정해야 하는 상황이 생기더라도 한 컴포넌트만 수정하면 된다는 이점이 있다.

### 2. 화면 업데이트 구현이 쉽다.

**업데이트:** 사용자의 행동(클릭, 드래그)에 따라 웹 페이지가 스스로 모습을 바꿔 상호작용 하는 것
![](https://velog.velcdn.com/images/cellnews3/post/abbab237-1c3b-45c0-945d-0b85c55c0426/image.png)
**선언형 프로그래밍:** 과정은 생략하고 목적만 간결히 명시하는 방법(마치 식당에서 주문하는 것과 유사함 ex: "토마토 파스타 하나 주세요.")\_리액트는 선언형 프로그래밍이다.

> **참고)** 명령형 프로그래밍(↔ 선언형 프로그래밍)
> 목적을 이루기 위한 모든 일련의 과정을 설명하는 방식
> ![](https://velog.velcdn.com/images/cellnews3/post/905ef56d-5b44-425a-8a4e-57780188bae9/image.png)![](https://velog.velcdn.com/images/cellnews3/post/278e8460-1a8c-4e3e-816a-b97055ded55c/image.png)

리액트는 컴포넌트 단위로 나눠서 개발하게 되는데 이 때 각각의 컴포넌트에는 State(state 값이 바뀌면 state값에 따라 바뀐 UI를 화면에 렌더링하도록 할 수 있음)라는 현재 컴포넌트의 상태를 저장할 수 있는 변수가 있다.![](https://velog.velcdn.com/images/cellnews3/post/946f5889-7630-4eb2-a9f7-44a26e7a1f64/image.png)

### 3. 화면 업데이트가 빠르게 처리된다.

#### 브라우저는 어떻게 동작되는가?

![](https://velog.velcdn.com/images/cellnews3/post/f9060538-0684-46be-8e7f-d65d4af2d3af/image.png)DOM: HTML을 일종의 객체 형태로 변환![](https://velog.velcdn.com/images/cellnews3/post/b4fb65b6-902e-44bf-818e-19ab2d52c247/image.png)![](https://velog.velcdn.com/images/cellnews3/post/1bd7d91d-e97e-4525-b389-ac4ca9eb80c5/image.png)Layout: 요소의 배치를 잡는 것 / Painting: 실제로 화면에 그려내는 과정![](https://velog.velcdn.com/images/cellnews3/post/f3b2b0d4-641f-4211-8a2c-79e94d3e5497/image.png)DOM이 수정되면 다시 업데이트 되는데 위의 과정을 다시 거치게 됨. 이때 Layout과 Painting과정이 오래 걸림(Reflow와 Repaint라고 따로 이름이 붙을 정도)![](https://velog.velcdn.com/images/cellnews3/post/771edc87-3459-458a-a279-5b159f0f1ee1/image.png)

**<DOM을 여러번 수정하는 코드 vs DOM을 딱 한 번만 수정하는 코드 성능 비교>**![](https://velog.velcdn.com/images/cellnews3/post/cf425e4a-d5b5-45f4-9873-5f248b0c9754/image.png)![](https://velog.velcdn.com/images/cellnews3/post/99126b16-eccc-4c31-ba68-07ce520797fe/image.png)

**결론:** 아래와 같이 동시에 발생한 업데이트를 모은 후 한 번에 수정하는 게 좋다. 하지만 서비스의 규모가 커질수록 이 작업이 힘들어짐![](https://velog.velcdn.com/images/cellnews3/post/43f4b75a-b3ff-433a-a447-58a53720e3a5/image.png)하지만 리액트는 이 과정을 자동으로 해준다!
![](https://velog.velcdn.com/images/cellnews3/post/dd0a43c3-d1d4-4b73-a308-c9f842799846/image.png)

#### Virtual DOM

Virtual DOM이 일종의 버퍼 역할을 해줌
![](https://velog.velcdn.com/images/cellnews3/post/7bfea758-0fe1-42dc-a802-dbde583776c6/image.png)![](https://velog.velcdn.com/images/cellnews3/post/bfc67437-b31c-4264-9236-f9206c469b99/image.png)![](https://velog.velcdn.com/images/cellnews3/post/aa52c8e7-2c5d-419c-aa97-bc720ab0085c/image.png)

---

# 📜 43강 : React App 생성하기

### ![](https://velog.velcdn.com/images/cellnews3/post/d670e8e4-331e-4fd1-aa90-90169f035649/image.png)<Vite을 이용해서 React App 생성하기>

- 터미널에 `npm create vite@latest` 입력![](https://velog.velcdn.com/images/cellnews3/post/770b04db-dbd1-4763-9b7b-0884b9f5ad54/image.png)y 입력하거나 그냥 엔터 누르기
  ![](https://velog.velcdn.com/images/cellnews3/post/1411ff50-8f38-4bba-9786-5d4f973587b5/image.png)
- `npm install` 혹은 `npm i`를 통해 패키지 및 라이브러리 설치

![](https://velog.velcdn.com/images/cellnews3/post/983def67-36d9-4dd9-a579-2e61e64f17a7/image.png)
node_modules : 앱을 만들기 위해 필요한 라이브러리와 패키지들(vite를 이용함으로써 한 번에 설치할 수 있게 됨👍)
public : svg나 png, jpg, 폰트 등을 저장하는 장소
src(source의 약자) : 실제로 작성하는 React와 JS코드들을 보관

### <서버 실행 방법>

- 터미널에 `npm run dev` 입력

---

# 📜 44강 : React App 구동 원리

![](https://velog.velcdn.com/images/cellnews3/post/bfe5e9ae-91db-4666-b9cb-8bef4583f949/image.png)![](https://velog.velcdn.com/images/cellnews3/post/a60de648-4292-482e-8364-db79da587489/image.png)`http://localhost:5173`에서 localhost는 우리 컴퓨터를 의미 함. 즉, 내 컴퓨터에서 실행중인 React 웹 서버에 요청을 보낸다는 뜻![](https://velog.velcdn.com/images/cellnews3/post/f85303fd-acea-4295-bf60-a6f6cacf1bc2/image.png) **포트번호:** 하나의 컴퓨터 내에서 여러개의 서버를 동작시키기 위한 주소 체계

아래와 같이 React 서버와 PHP 서버가 돌고 있을 때, 내 컴퓨터가 각각의 서버에 포트번호를 부여해줌으로써 localhost:5173이 어떤 서버에 요청을 보내는지 알수 있게 됨 ![](https://velog.velcdn.com/images/cellnews3/post/2c6894c3-6ade-4213-87fa-6f6b34f59972/image.png)

그럼 다른 컴퓨터에서도 `http://localhost:5173` 에 접속하면 내 컴퓨터와 같은 서버에 접속이 될까?
=> ❌. 아래 예와 같이 생각하면 됨
![](https://velog.velcdn.com/images/cellnews3/post/51fbac0f-93cc-4dfe-af57-7ef949f87466/image.png)

### main.jsx 살펴보기![](https://velog.velcdn.com/images/cellnews3/post/7350c686-b08c-4e37-be28-22217252a149/image.png)

`<App />` : App 컴포넌트를 불러옴
![](https://velog.velcdn.com/images/cellnews3/post/18170188-121a-4b16-92f5-725edf8392be/image.png) App 함수는 html코드를 리턴한다. (return 값을 보면 서버를 실행시켰을 경우 나타나는 요소들이 여기에 적혀있음을 알 수 있다.)
