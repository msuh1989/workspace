import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  state = {
    persons: [
      { id: 'adf112dd', name: 'Max', age: 28 },
      { id: 'dwa1fu', name: 'Manu', age: 29 },
      { id: '89ujh', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons; 
    // in javascript object and arrays are reference types

    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    // spread operator
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);
    // person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex].name = event.target.value;

    // persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  render() {
    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer'
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // };
    // no pseudoselectors like hover use Radium(third party module)

    let btnClass = '';

    let persons = null;

    if(this.state.showPersons){
      persons = (
      <div >
        {this.state.persons.map( (person, index) => {
          return <ErrorBoundary key={index}><Person
          click={() => this.deletePersonHandler(index)}
           name={person.name}
           age={person.age}
           changed={(event) => {this.nameChangedHandler(event, person.id)}} />
           </ErrorBoundary>
        })}
      </div> 
      );
      // only use ErrorBoundary when you know a code might fail, and you can't control it.
      // use in production so the whole app does not crash.

      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
      btnClass = classes.Red;
    }

    const assignedClasses =  [];
    if(this.state.persons.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    console.log("classes" , classes);


    return (
      <div className={classes.App}>
        <h1>Hi, I'm a React App</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
        className={btnClass}
          onClick={this.togglePersonsHandler}>Switch Name</button>
      {persons}

      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
//higher order component
