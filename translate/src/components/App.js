import React from "react";
import { LanguageStore } from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";
import LanguageSelector from "./LanguageSelector";
import UserCreate from "./UserCreate";

const App = () => {
  return (
    <LanguageStore>
      <div className="ui container">
        <LanguageSelector />
        <ColorContext.Provider value="blue">
          <UserCreate />
        </ColorContext.Provider>
      </div>
    </LanguageStore>
  );
};

export default App;
