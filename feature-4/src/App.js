import React from "react";
import Components from "./Components/Components.js";
import Parse from "parse";
import * as Env from "./environments.js";

Parse.initialize(Env.PARSE_APPLICATION_ID, Env.PARSE_JAVASCRIPT_KEY);
Parse.serverURL = Env.PARSE_HOST_URL;

const App = () => {
  return <Components />;
};

export default App;
