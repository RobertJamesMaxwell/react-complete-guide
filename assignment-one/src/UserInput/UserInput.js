import React from 'react';

import './UserInput.css';

const userInput = props => {
  return (
    <div className="UserInput">
      <h2>Enter User One username:</h2>
      <input onChange={props.inputChangeHandler} type="text" value={props.startName} />
    </div>
  )
}

export default userInput;