import React from "react";
import BandList from "./BandList";
import SelectedBand from "./SelectedBand";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <BandList />
        </div>
        <div className="column eight wide">
          <SelectedBand />
        </div>
      </div>
    </div>
  );
};

export default App;
