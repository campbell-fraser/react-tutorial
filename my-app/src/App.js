import React from 'react';
import Header from './components/Header';
import Card from './components/Card';
import Button from './components/Button'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="row">
          <Card title="Countdown numbers round" text="Emulates the countdown numbers round. User picks selection of numbers, program generates goal." />
          <Card title="Trigonometry solver" text="When given a triange, solves for side or angle." />
          <Card title="Basic react app" text="This is a react page I made using create-react-app" />
        </div>
      </div>
      <div className="container">
        <div className="row mb-5">
          <Button colour="dark" link="https://github.com/campbell-fraser/hello-world/blob/master/countdown-numbers.py" name="countdown.py"/>
          <Button colour="dark" link="#" name="trig.py"/>
          <Button colour="dark" link="https://github.com/campbell-fraser/react-tutorial/tree/master/my-app" name="Link to repo"/>
        </div>
      </div>
    </div>
  );
}

export default App;