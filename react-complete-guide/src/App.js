import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    people: [
      { name: 'Robert', age: 30 },
      { name: 'Chris', age: 30 },
      { name: 'Banan', age: 15 }
    ]
  }

  switchNameHandler = newName => {
    console.log('Switch Name clicked');
    this.setState({
      people: [
        { name: newName, age: 30 },
        { name: 'Chris', age: 30 },
        { name: 'Banan', age: 16 }
      ]
    })
  }

  nameChangeHandler = event => {
    console.log('Name Change Handler');
    this.setState({
      people: [
        { name: 'Robert', age: 30 },
        { name: event.target.value, age: 30 },
        { name: 'Banan', age: 16 }
      ]
    })
  }

  render() {
    const { people } = this.state;
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '9px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hello, this is a React App</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler('Bob')}
        >Switch Name</button>
        <Person 
          name={people[0].name} 
          age={people[0].age} />
        <Person 
          name={people[1].name} 
          age={people[1].age}
          clickPerson={this.switchNameHandler.bind(this, 'Beto')} 
          nameChangeHandler={this.nameChangeHandler}
        >Hobbies: games</Person>
        <Person 
          name={people[2].name} 
          age={people[2].age} />
      </div>
    );
  }
}

export default App;

