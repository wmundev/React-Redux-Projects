import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  renderLabelText() {
    return this.context.language === "English" ? "name" : "姓名";
  }

  render(){
    return (
      <div className="ui field">
        <label>{this.renderLabelText()}</label>
        <input type="text"/>
      </div>
    );
  }
}

export default Field;