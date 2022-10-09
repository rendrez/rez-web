import React from 'react';
import logo from './logo.svg';
import bg from './bg.jpg'
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <div className='background'>
        <Navbar />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Muhammad Randy</h1>
          <p>I'm currently learning about Reactjs</p>
        </header>
      </div>
    </div>
  );
}

// Background photo by <a href="https://unsplash.com/@dell?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Dell</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
  

export default App;
