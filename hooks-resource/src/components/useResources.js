import { useState, useEffect } from "react";
import axios from "axios";

const useResource = resource => {
  const [resources, setResource] = useState([]);

  useEffect(() => {
    (async resource => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${resource}`
      );
      setResource(response.data);
    })(resource);
  }, [resource]);
  return resources;
};

export default useResource;
