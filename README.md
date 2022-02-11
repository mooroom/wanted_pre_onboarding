# 원티드 프리온보딩 코스

# wanted_pre_onboarding

사용 라이브러리 : stlyed-components, react-icons

App.js

가장 상위 컴포넌트인 App.js에서 각각의 컴포넌트에 대해 조회가 가능하도록 navigation을 넣었음.

App.css

컴포넌트에서 자주 사용할 색상을 primary, secondary, text-gray로 나누어 각각 css 변수로 정의하였음. 또한 각 컴포넌트가 화면의 중앙에 일관되게 표시되도록 .App클래스(최상위 div)에 flex-box 속성을 정의하였음.

Toggle.js

토글 스위치 내부 원형버튼의 사이즈에 비례해 스위치 전체의 사이즈 및 애니메이션이 조절되도록 width, padding값 등등을 초기 상수로 정의하였음. 예시에서의 토글 스위치와 가장 가깝게 구현하기 위해 내부의 원형 버튼과 slider를 따로 분리하여 각각 애니메이션을 주었음. 보라색 background의 inner shadow를 구현하기까지 긴 시간 고민을 하였고, slider의 z-index와 열고 닫힘의 방향을 적절히 조절하여 완성하였음

Modal.js

props로 content를 받아 모달 안에 표시될 내용은 바깥 컴포넌트에서 정의할 수 있도록 하였음. modal이라는 단일 state을 정의하고 button의 클릭여부에 의해 display를 함. 모달 내부의 x버튼을 누르면 modal state을 false로 변경하여 display 하지 않음

Tab.js

Tab내부에 들어갈 title과 대응하는 content를 data prop으로 받음. useEffect 훅을 활용하여 data prop의 각 원소에 active와 id 값을 넣어 재가공함. 이를 토대로 Tab item 클릭시에 id값의 일치 여부를 판단하여 target item의 active값을 true로 변경하고 나머지는 false로 바꿔줌

Tag.js

TagsBlock내부를 tag들이 위치할 container와 input이 들어갈 부분으로 분리하였음. useRef를 사용하여 늘어나는 태그의 id를 부여할 수 있도록 nextId변수를 생성하였음. Tag생성시 onKeyUpCapture 이벤트 핸들러를 활용하여 중복으로 ENTER키가 인식되지 못하도록 처리하였으며 아무것도 입력이 되지 않았을 경우에는 태그 추가 없이 return 한다. Remove 기능의 경우 filter매서드를 사용해 클릭한 태그의 id와 일치하지 않는 태그만 남기도록 코드를 작성하였다.

autoComplete.js

자동완성에 사용할 검색어 리스트가 필요하기 때문에 fetch함수를 활용, [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users) 에서 username 리스트를 불러온다.

Input에 텍스트 입력시 onChange이벤트 핸들러 통해 작성한 텍스트를 정규식 객체로 변환해 username리스트와 match하는 item을 filtering하여 suggestions state에 저장한다. Suggestions state에 업데이트되는 데이터는 추천검색어 처럼 검색창 하단에 리스트로 표시된다.

clickToEdit.js

이름과 나이값이 저장될 객체의 형태로 inputs state를 정의한다. 각각의 input에 onBlur이벤트 핸들러를 추가하여 input에서 focus out 되었을 경우 최종 value로 저장된 값을 inputs state에 업데이트 한다. 업데이트된 state을 반영하여 이름과 나이 정보가 form 하단에 표시된다.
