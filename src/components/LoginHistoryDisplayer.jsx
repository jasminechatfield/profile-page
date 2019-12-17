import React from "react";

class LoginHistoryDisplayer extends React.Component {
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
