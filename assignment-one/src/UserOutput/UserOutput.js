import React from 'react';

const userOutput = props => {
  const styles = {
    fontSize: '2rem',
    fontFamily: 'Georgia'
  }
  return (
    <div style={styles}>
      <p>User Output paragraph numero uno. User: {props.name}</p>
      <p>User Output paragraph numero dos. That's spanish. User: {props.name}</p>
    </div>
  );
}

export default userOutput;