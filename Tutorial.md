https://create-react-app.dev/ 

한방에 실행하겠다.
디렉토리 생성하고, 터미널 띄우고 현 디렉토리에 개발환경을 세팅
npx create-react-app . 
npm run start: 실행
npm install react --save

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


Day 2

https://stackblitz.com/?starters=frontend

상태의 값이 배열, 객체와 같은 값의 컨테이너인 경우
상태를 복제한 후에 데이터를 추가, 수정, 삭제 해야 한다.
그래야 리액트는 이전의 상태와 이후의 상태가 변경 되었다는것을  수 있다.

Immutablility (불변성)
…history -> 불변성

a = [1,2];
b = a;
b.push(3);
console.log(a,b);

a = [1,2];
b = [...a]; //a는 안전해짐
b.push(3);
console.log(a,b);

배열의 태그로 만들 때는 map함수를 사용한다.
Key값을 제공해야 한다. key값은 목록 안에서만 유일하면 된다.

### 도배코드
버튼 누르고 복사 (개발자 모드에서)
setInterval(()=>{
    document.querySelector("#root > div > div:nth-child(1) > button").click();
}, 100)

set함수의 값은 값일 수도 있고, 함수 일 수도 있다.
1번째 파라메터는 아주 신선한 상태의 스테이트 값이다.

클로저 개념

부작용은 useEffect에 격리한다.
- 부작용을 쉽게 파악할 수 있다.
- 테스팅 할 때 유리하다.
- 부작용의 실행 타이밍을 제어 할 수 있다.
- 부작용의 실행 타이밍을 제어할 수 있다. 두번째 파라미터가 없으면
컴포넌트와 함께 실행된다. 빈 배열이면 딱 한번 실행된다. 값이 있으면 그 값이 변경 되었을 때 실행된다.


함수가 정의 될 때 함수내에서 사용되는 변수는 함수 안에 봉인된다. 클로저라고 한다.

Set 함수의 입력값은 값이거나, 함수이다. 함수의 파라메터는 신선한 상태의 값이다.
리턴값이 새로운 상태가 된다.

useEffect의 리턴값은 정리 할때 사용한다. unmount,재실행될때 자동으로 호출된다.