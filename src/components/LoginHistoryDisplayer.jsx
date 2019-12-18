import React from "react";
import moment from "moment";

// The LoginHistoryDisplayer class component holds login history information in an array in state and maps each item into list items. MomentJS is imported and used to format the dates to display the time and the time since now.

class LoginHistoryDisplayer extends React.Component {
  // The state is initialised with a number of date objects.
  state = {
    history: [
      new Date(),
      new Date(2019, 11, 16, 11, 12, 1),
      new Date(2019, 11, 10, 20, 78, 23),
      new Date(2019, 10, 28, 30, 10, 1),
      new Date(2019, 10, 21, 12, 12, 12, 12),
      new Date(2019, 10, 10, 2, 2, 14, 40),
      new Date(2019, 10, 5, 30, 5, 21, 3),
      new Date(2019, 9, 21, 7, 20, 66, 6)
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
            return (
              <li key={date}>
                {moment(date).format("MMMM Do YYYY, h:mm:ss a")}
                <br />({moment(date).fromNow()})
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default LoginHistoryDisplayer;
