import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class App extends React.Component {
  state = { language: "English", color: "primary" };

  onLanguageChange(language, color) {
    this.setState({ language, color });
  }

  renderLanguageLabel() {
    const text =
      this.state.language === "English" ? "Select Language" : "选择语言";
    return <label>{text}</label>;
  }

  render() {
    return (
      <div className="ui container">
        <div>
          {this.renderLanguageLabel()}
          <br />
          <i
            className="flag au"
            onClick={() => this.onLanguageChange("English", "primary")}
          />
          <i
            className="flag cn"
            onClick={() => this.onLanguageChange("Chinese", "red")}
          />
        </div>
        <br />
        <ColorContext.Provider value={this.state.color}>
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate />
          </LanguageContext.Provider>
        </ColorContext.Provider>
      </div>
    );
  }
}

export default App;
