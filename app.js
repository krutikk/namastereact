import React from "react";
import ReactDOM from "react-dom/client";
const html = React.createElement;
const root = ReactDOM.createRoot(document.getElementById("root"));

const heading = html(
  "h1",
  { id: "heading" },
  "Namaste React from react script"
);

const jsxheading = (
  <h1 id="heading">Namaste React from react script using jsx</h1>
); //html like syntax

//js engine ES6 Ecmascript

//React.createElement => React element => html element
//ReactDOM.render => React element => html element => browser
const Title = () => (<h2> React using JS</h2>);

const data = 1000;
const HeadingComponent = () => (
  <div id="container">
    <Title> </Title>
    data: {data}
    <h1 className="heading"> Namaste React from react functional using jsx</h1>
  </div>
);

root.render(<HeadingComponent />); //it became html element
