import { render } from "@testing-library/react";
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

}

export default App;
