import React, { Component } from "react";
import { connect } from "react-redux";
import PostDetail from "./PostDetail";
import { fetchUsersAndPosts } from "../actions";

class App extends Component {
  componentDidMount = () => {
    this.props.fetchUsersAndPosts();
  };

  render() {
    return (
      <div className="ui container">
        <PostDetail />
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUsersAndPosts }
)(App);
