import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, updateStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.updateStream(formValues, this.props.match.params.id);
  };

  render() {
    if (this.props.stream) {
      return (
        <StreamForm
          onSubmit={this.onSubmit}
          initialValues={_.pick(this.props.stream, ["title", "description"])}
        />
      );
    }
    return <div>Loading</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.stream[ownProps.match.params.id]
  };
};

export default connect(
  mapStateToProps,
  { fetchStream, updateStream }
)(StreamEdit);
