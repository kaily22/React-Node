/* 
import React ,{Component}from "react";


class App extends Component {

  render() {

    const summary = '사용자가 UI를 효과적으로 구축하기 위해 사용하는  자바스크립트 기반의 라이브러리';
    return (
      <form>
        <h2>리액트란?</h2>
        <div>{summary}</div>
      </form>
    );
  }

} */

/*props 실습 */

// import React, { Component } from "react"; 
// import Payment from './Payment';
// import Wrapper from "./Wrapper";

// class App extends Component {
//   render() {
//     return (
//         <Wrapper>
//           <Payment amount="56000원" color="red" isSpecial={true} />  {/*자식컴포넌트 props_name="props_value"/> */}
//         </Wrapper>
//         );
//   }
// }
//export default App;

/* input 상태 관리하기 */
import React from 'react';
import InputSample from './InputSample';

function App() {
  return(
    <InputSample />
  );
}

export default App;
