import React from "react";

const ReasourceList = ({ resource }) => {
  const resources = resource.map(item => <li key={item.id}>{item.title}</li>);
  return (
    <ul>
      {resources}
    </ul>
  );
};

export default ReasourceList;
