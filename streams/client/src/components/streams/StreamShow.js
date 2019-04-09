import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (this.props.stream) {
      return (
        <div>
          <h2>{this.props.stream.title}</h2>
          <h3>{this.props.stream.description}</h3>
        </div>
      );
    } else {
      return <div>Loading...</div>
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
