import React from "react";
import ReactDOM from "react-dom/client";

const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);
//in single line JSX no need bracket
//if multiline required bracket

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);