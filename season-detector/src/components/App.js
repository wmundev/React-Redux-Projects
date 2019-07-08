import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends Component {
  state = { lat: null, errorMsg: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMsg: error.message })
    );
  }

  renderContent = () => {
    if (!this.state.lat && this.state.errorMsg) {
      return <div>Error: {this.state.errorMsg}</div>;
    }

    if (this.state.lat && !this.state.errorMsg) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner msg="Please allow location detection." />;
  };

  render() {
    return this.renderContent();
  }
}

export default App;
