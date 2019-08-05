import React, {Component} from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends Component {
  static contextType = LanguageContext;
  
  renderLabel = () => {
    const content = this.context.language === "english" ? "Name" : "姓名";
    return <label>{content}</label>
  };

  render() {
    return (
      <div className="field">
        {this.renderLabel()}
        <input type="text" style={{ width: "30%" }}/>
      </div>
    );
  }
}

export default Field;