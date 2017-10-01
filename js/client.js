
import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import ToDoApp from "./Component/ToDoApp";
import store from "./store";


const app = document.getElementById("root");

ReactDOM.render(
    <Provider store= {store}>
      <ToDoApp />
    </Provider>, app);
