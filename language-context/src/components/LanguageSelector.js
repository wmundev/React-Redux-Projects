import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  renderLanguageLabel() {
    const text =
      this.context.language === "English" ? "Select Language" : "选择语言";
    return <label>{text}</label>;
  }

  onLanguageChange(language, color) {
    this.context.onLanguageChange(language, color);
  }

  render() {
    return (
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
    );
  }
}

export default LanguageSelector;
