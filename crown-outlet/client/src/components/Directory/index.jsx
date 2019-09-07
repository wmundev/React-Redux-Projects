import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import "./Directory.scss";
import MenuItem from "../MenuItem";
import { getDirectorySections } from "../../redux/directory/directorySelectors";

const Directory = ({ sections }) => {
  const renderSections = () => {
    const sectionsContent = sections.map(({ id, ...otherInfos }) => {
      return <MenuItem key={id} {...otherInfos} />;
    });
    return sectionsContent;
  };

  return <div className="directory-menu">{renderSections()}</div>;
};

const mapStateToProps = createStructuredSelector({
  sections: getDirectorySections
});

export default connect(mapStateToProps)(Directory);
