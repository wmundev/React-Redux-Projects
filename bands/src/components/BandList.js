import React, { Component } from "react";
import { connect } from "react-redux";
import { bandSelector } from "../actions";

class BandList extends Component {
  renderList() {
    return this.props.bands.map(band => {
      return (
        <div className="item" key={band.name}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                this.props.bandSelector(band);
              }}
            >
              Select
            </button>
          </div>
          <div className="content">{band.name}</div>
        </div>
      );
    });
  }

  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

export default connect(
  mapStateToProps,
  { bandSelector }
)(BandList);
