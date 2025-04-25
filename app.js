import React from "react";
import ReactDOM from "react-dom/client";
const html = React.createElement;
const root = ReactDOM.createRoot(document.getElementById("root"));
const parent = html("div", { id: "parent", key: "parent" }, [
        html("div", { id: "child1", key: "child1" }, [
                html("h1", { id: "heading", key: "h1child1" }, "I am H1 tag"),
                html("h2", { id: "sub-heading", key: "h2child1" }, "I am H2 tag"),
        ]),
        html("div", { id: "child2", key: "child2" }, [
                html("h1", { id: "heading", key: "h1child2" }, "Namaste React from react script"),
                html("h2", { id: "sub-heading", key: "h2child2" }, "Namaste React from react script"),
        ]),
]);
const heading = html("h1", { id: "heading" }, "Namaste React from react script");
console.log(heading);
root.render(parent);