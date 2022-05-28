import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './componemt/Counter';
import Users from './componemt/Users';
import User from './componemt/User';

function App() {

  // let student = 5;

  // interface Person {
  //   name: string,
  //   age: number,
  //   location: number,
  //   job: string | number
  // }


  // const person: Person = {
  //   name: "Bill Cliton",
  //   age: 49,
  //   location: 55,
  //   job: 'jobless'
  // }



  // const handeladduser = (firstName: string, age: number, address: string): number => {
  //   const total: number = 50
  //   return total;


  // }



  return (
    <div className="App">

      <Counter></Counter>
      <User></User>

    </div>
  );
}

export default App;