import React, { Component } from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div style={{ width: "30%" }}>
        <div className="header">Select a language:</div>
        <div className="content">
          <i className="au flag" onClick={() => this.context.onLanguageChange("english")}/>
          <i className="cn flag" onClick={() => this.context.onLanguageChange("chinese")}/>
        </div>
      </div>
    );
  }
}

export default LanguageSelector;
