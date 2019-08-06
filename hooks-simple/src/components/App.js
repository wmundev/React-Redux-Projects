import React, { useState } from "react";
import useResource from "./useResources";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  return (
    <div className="ui container">
      <UserList resource={useResource("users")} />
      <button
        className="ui primary button"
        onClick={() => setResource("posts")}
      >
        Posts
      </button>
      <button className="ui red button" onClick={() => setResource("todos")}>
        Todos
      </button>
      <ResourceList resource={useResource(resource)} />
    </div>
  );
};

export default App;
