import React from "react";

// The LoginHistoryDisplayer class component holds login history information in an array in state and maps each item into list items.

class LoginHistoryDisplayer extends React.Component {
  // The state is initialised with a number of date objects.
  state = {
    history: [
      new Date(),
      new Date(2019, 11, 16),
      new Date(2019, 11, 10),
      new Date(2019, 10, 28),
      new Date(2019, 10, 21),
      new Date(2019, 9, 21)
    ]
  };
  render() {
    // Destructuring history from the state:
    const { history } = this.state;
    return (
      <div className="LoginHistoryDisplayer">
        <h2>Login History</h2>
        <ul>
          {history.map(date => {
            return <li key={date}>{date.toString()}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default LoginHistoryDisplayer;
