import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./app/component/Hello";

window.onload = () => {
    ReactDOM.render(
        <Hello compiler="TypeScript" framework="React"/>,
        document.getElementById('app')
    );
};