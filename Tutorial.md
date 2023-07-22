https://create-react-app.dev/ 

한방에 실행하겠다.
디렉토리 생성하고, 터미널 띄우고 현 디렉토리에 개발환경을 세팅
npx create-react-app . 
num run start: 실행

세탁
src/index.js : entry 파일
src/App.js : 내용 초기화
src/App.css 초기화
src/index.css 초기화

그냥은 용량이 많아서 빌드
npm run build

https://app.netlify.com/drop/
그냥 drop하면 알아서 됨

리액트는 사용자 정의 태그를 만드는 기술이다
사용자 정의 태그를 컴포넌트라고 부른다
컴포넌트는 함수다.
함수의 리턴값이 컴포넌트의 UI가 된다.
함수를 사용해서 재사용

javascript: https://yunbinni.tistory.com/75
html: https://worlf.tistory.com/50

Class 3

기존 주소
https://github.com/coohde/react-2023-7-22

src 폴더에다 모아놓음
바깥 html은 public에 모아놓음

Component에서 객체가 주입되는데, 관련 값이 속성으로 주입
<Counter title="불면증 카운터1" initValue="10"></Counter>
html에서 변수를 받을 때는 중괄호를 사용
props는 입력값이다.
props에 중괄호를 사용하면 js의 데이터타입으로 주입되고, "를 사용하면 문자열로 평가 된다.

---
State & Event
jsx라는 유사 자바스크립트
html아님..  (대문자)
이벤트 값은 반드시 함수

리액트는 철학적으로 굉장히 관료적임
컴포넌트 사용자가 주입한 값은 함수에서 내부에서 변경 못하게함

props는 외부에서 내부로 주입되는 상태
state는 내부적으로 사용하는 상태

상태는 배열이다.
첫번째 원소는 상태의 값이다.
두번재 원소는 상태의 값을 호출하는 함수다.
첫번째 원소는 읽을 때 쓴다.
두번째 원소는 바꿀때 쓴다.
