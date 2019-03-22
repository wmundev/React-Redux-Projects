import React, { Component } from "react";
import { connect } from "react-redux";

class SelectedBand extends Component {
  render() {
    if (!this.props.band) {
      return <div>Please select a band</div>;
    } else {
      return (
        <div>
          <h3>Details</h3>
          <p>
            Name: {this.props.band.name}
            <br />
            Origin: {this.props.band.origin}
          </p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { band: state.selectedBand };
};

export default connect(mapStateToProps)(SelectedBand);
