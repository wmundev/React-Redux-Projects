import React from "react";
import UserHeader from "./UserHeader";
import { connect } from "react-redux";

const PostDetail = ({ postList }) => {
  const posts = postList.map(post => {
    return (
      <div className="item" key={post.id}>
        <div className="content">
          <h1 className="header">{post.title}</h1>
          <p className="description">{post.body}</p>
          <UserHeader userId={post.userId} />
        </div>
      </div>
    );
  });

  return <div className="ui relaxed divided list">{posts}</div>;
};

const mapStateToProps = ({ postList }) => {
  return { postList };
};

export default connect(mapStateToProps)(PostDetail);
