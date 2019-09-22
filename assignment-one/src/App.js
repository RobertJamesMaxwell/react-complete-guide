import React, { Component } from 'react';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';
import './App.css';

class App extends Component {

  state = {
    usernameOne: 'Gordon Ryan',
    usernameTwo: 'Kron Gracie'
  };

  inputChangeHandler = event => {
    const newName = event.target.value;
    console.log('newName: ', newName);
    this.setState({
      usernameOne: newName
    });
  }

  render() {
    return (
      <div className="App">
        <UserInput
          startName={this.state.usernameOne}
          inputChangeHandler={this.inputChangeHandler}
        />
        <UserOutput 
          name={this.state.usernameOne}
        />
        <UserOutput
          name={this.state.usernameTwo}
        />
      </div>
    );
  }

}

export default App;
