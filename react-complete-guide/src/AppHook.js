import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Min', age: 29 },
      { name: 'John', age: 20 }
    ],
    // otherState: "some other state"
  });

  // always returns two elements 1. the state object 2. function to update the state
  // !!!!useState update functions does not "merge" the state objects. it replaces
  // workaround use multiple state slices
  // react hooks adds functionality to functional components

  const [otherState, setOtherState] = useState('some other value');
  // it does not even have to be an object

  const switchNameHandler = () => {
    let array = [...personsState.persons]
    array[0].name = 'Maximilian';
    array[2].name = 'Won';
    setPersonsState({ persons: array });
  }

  console.log(personsState, otherState);

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}></Person>
      {/* <Person name="Manu" age="29"><Person name="Min" age="29">Hobbies: Meditation</Person></Person> */}
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I\'m a React App'))
  // typically one root element
  // ( ) used to write over multiple lines

  // use uppercase for custom components

  // Other supported events:
  // https://reactjs.org/docs/events.html#supported-events

}

export default app;

// state = {
//   persons: [
//     {name: 'Max', age: 28},
//     {name: 'Min', age: 29},
//     {name: 'John', age: 20}
//   ]
// }

// switchNameHandler = () => {
//   // console.log('Was clicked!')
//   // this.state.persons[0].name = 'Maximilian'
//   let array = [...this.state.persons]
//   array[0].name = 'Maximilian';
//   array[2].name = 'Won';
//   this.setState({persons : array});
//   console.log(this.state.persons[0]);
// }