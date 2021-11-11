import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter, Routes, Route, Switch, Link, NavLink, useParams } from 'react-router-dom';
//자식 컴포넌트
function Home() {
  return (

    <div>
      <h2>Home</h2>
      Home...
    </div>
  ); 
}

function Topics() {
  return (
    <div>
        <h2>Topics</h2>
        Topics...
    </div>
  );
}

function Contact() {
  return (
    <div>
        <h2>Contact</h2>
        Contact...
    </div>
  );
}

//부모 컴포넌트
function App() {
  return (  
      <div>
        <h1>React Router DOM 예제</h1>
        <ul>
            <li><NavLink exact to="/">Home</NavLink></li> {/* 사용자 정의 태그 */}
            <li><NavLink to="/topics">Topics</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/topics" element={<Topics/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
        </Routes>
      </div>
  );
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
