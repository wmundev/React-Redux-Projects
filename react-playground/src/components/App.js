import React from "react";
import UserOutput from "./UserOutput";
import UserInput from "./UserInput";
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends React.Component {
  state = {
    username: "Kevin",
    charsInput: ""
  };

  onNameChange = event => {
    this.setState({ username: event.target.value });
  };

  onInputChange = event => {
    this.setState({
      charsInput: event.target.value
    });
  };

  onCharClick = index => {
    const chars = this.state.charsInput.split("");
    const newChars = chars.filter((c, i) => {
      return index !== i;
    });
    const newInput = newChars.join("");
    this.setState({ charsInput: newInput });
  };

  render() {
    const chars = this.state.charsInput.split("");
    const charsDisplay = chars.map((c, index) => {
      return (
        <CharComponent
          letter={c}
          key={index}
          clicked={() => this.onCharClick(index)}
        />
      );
    });

    return (
      <div>
        <div>
          <UserInput
            username={this.state.username}
            onNameChange={this.onNameChange}
          />
          <UserOutput username={this.state.username} />
        </div>
        <div>
          <input type="text" onChange={this.onInputChange} value={this.state.charsInput}/>
          <p>Input Length: {this.state.charsInput.length}</p>
          <ValidationComponent length={this.state.charsInput.length} />
          {charsDisplay}
        </div>
      </div>
    );
  }
}

export default App;
