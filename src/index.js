import { App } from "./app";
import React from "react";
import ReactDOM from "react-dom";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<App />, wrapper) : false;