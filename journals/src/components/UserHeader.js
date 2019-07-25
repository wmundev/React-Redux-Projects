import React, { Component } from "react";
import { connect } from "react-redux";

class UserHeader extends Component {
  render() {
    if (this.props.user) {
      const userName = this.props.user.name;
      return (
        <a className="header" href="/">
          {userName}
        </a>
      );
    }
    return <div />;
  }
}

const mapStateToProps = ({ userList }, { userId }) => {
  const user = userList.find(u => {
    return u.id === userId;
  });
  return {
    user
  };
};

export default connect(mapStateToProps)(UserHeader);
