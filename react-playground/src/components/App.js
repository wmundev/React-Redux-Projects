import React from "react";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";

class App extends React.Component {
  state = {
    username: "Kevin"
  };

  onNameChange = event => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div>
        <UserInput
          username={this.state.username}
          onNameChange={this.onNameChange}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
