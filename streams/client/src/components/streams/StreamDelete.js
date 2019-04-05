import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onClick = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  renderActions() {
    return (
      <React.Fragment>
        <button className="ui button negative" onClick={this.onClick}>
          Delete
        </button>
        <Link className="ui button" to="/">
          Cancel
        </Link>
      </React.Fragment>
    );
  }

  renderContent() {
    if (this.props.stream) {
      return `Do you want to delete this stream: ${this.props.stream.title}?`;
    } else {
      return "Do you want to delete this stream?";
    }
  }

  render() {
    return (
      <Modal
        header="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, deleteStream }
)(StreamDelete);
