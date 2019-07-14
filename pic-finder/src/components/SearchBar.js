import React, { Component } from "react";

class SearchBar extends Component {
  state = { term: "" };

  onTermChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment" style={{ marginTop: "10px" }}>
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <label>Image Search</label>
          <input
            type="text"
            onChange={this.onTermChange}
            value={this.state.term}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
