import React from "react";

class LoginHistoryDisplayer extends React.Component {
  state = {
    history: [
      "Yesterday",
      "The day before",
      "The day before that",
      "The day before the day before that",
      "Etcetera"
    ]
  };
  render() {
    const { history } = this.state;
    return (
      <div className="LoginHistoryDisplayer">
        <h2>Login History</h2>
        <ul>
          {history.map(date => {
            return <li key={date}>{date}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default LoginHistoryDisplayer;
